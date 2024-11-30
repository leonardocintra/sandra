import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { KindeService } from '../kinde.service';
import { HttpService } from '@nestjs/axios';
import { KINDE_BASE_URL } from 'src/commons/constants';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    private readonly kindService: KindeService,
    private readonly httpService: HttpService,
  ) { }

  async findById(userId: string) {

    const headers = await this.kindService.getHeaders();
    const url = `${KINDE_BASE_URL}/api/v1/user?id=${userId}&expand=organizations`;

    return await firstValueFrom(
      this.httpService.get(url, { headers }).pipe(
        map((response) => response.data),
        catchError((error) => {
          if (error.response?.status === 404 || error.response.status === 400) {
            throw new HttpException('User not found', 404);
          }

          throw new HttpException(
            error.response?.data?.message || 'Unexpected error occurred',
            error.response?.status || 500,
          );
        }),
      ),
    );
  }

  async create(createUserDto: CreateUserDto) {
    const headers = await this.kindService.getHeaders();

    const url = `${KINDE_BASE_URL}/api/v1/organizations/${createUserDto.orgCode}/users`;

    const inputBody = {
      users: [
        {
          id: createUserDto.userId,
        }
      ]
    };

    return await firstValueFrom(
      this.httpService.post(
        url,
        inputBody,
        { headers },
      ),
    );
  }
}
