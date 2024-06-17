import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dbo';
import { KindeService } from '../kinde.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { KINDE_BASE_URL } from 'src/commons/constants';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly kindService: KindeService,
    private readonly httpService: HttpService,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const token = await this.kindService.getAccessToken();

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

    const url = `${KINDE_BASE_URL}/api/v1/organization`;

    return await firstValueFrom(
      this.httpService.post(
        url,
        {
          name: createOrganizationDto.name,
          external_id: createOrganizationDto.external_id,
          is_allow_registrations: true,
        },
        { headers },
      ),
    );
  }
}
