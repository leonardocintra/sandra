import { HttpException, Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dbo';
import { KindeService } from '../kinde.service';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, forkJoin, map, of, throwError } from 'rxjs';
import { KINDE_BASE_URL } from 'src/commons/constants';
import { IOrganization } from 'restaurante';
import { UsersService } from '../users/users.service';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly kindService: KindeService,
    private readonly httpService: HttpService,
    private readonly userService: UsersService
  ) { }

  async findByUserId(userId: string) {
    const user = await this.userService.findById(userId);
    const organizations: string[] = user.organizations;
    const headers = await this.kindService.getHeaders();

    // Mapeia os códigos das organizações para requisições HTTP
    const requests = organizations.map((orgCode) => {
      const url = `${KINDE_BASE_URL}/api/v1/organization?code=${orgCode}`;

      return this.httpService.get(url, { headers }).pipe(
        map((response) => response.data), // Extrai apenas os dados relevantes
        catchError((error) => {
          if (error.response?.status === 404 || error.response?.status === 400) {
            // Se não encontrado, retorna mensagem ao invés de lançar erro
            return of({ code: orgCode, error: 'Organization not found' });
          }
          // Para outros erros, lançamos a exceção
          return throwError(() =>
            new HttpException(
              error.response?.data?.message || 'Unexpected error occurred',
              error.response?.status || 500,
            ),
          );
        }),
      );
    });

    // Usa forkJoin para executar as requisições em paralelo e coletar os resultados
    return await firstValueFrom(
      forkJoin(requests).pipe(
        map((results) => results), // Combina todos os resultados em um array
      ),
    );
  }

  async create(createOrganizationDto: CreateOrganizationDto): Promise<IOrganization> {
    const headers = await this.kindService.getHeaders();

    const url = `${KINDE_BASE_URL}/api/v1/organization`;
    const body = {
      name: createOrganizationDto.name,
      external_id: createOrganizationDto.external_id,
      is_allow_registrations: true,
    }

    const response = await firstValueFrom(
      this.httpService.post(url, body, { headers }),
    );

    const result: IOrganization = {
      code: response.data.organization.code
    }
    return result;
  }
}
