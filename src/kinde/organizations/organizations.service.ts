import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dbo';
import { KindeService } from '../kinde.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { KINDE_BASE_URL } from 'src/commons/constants';
import { IOrganization } from 'restaurante';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly kindService: KindeService,
    private readonly httpService: HttpService,
  ) { }

  async create(createOrganizationDto: CreateOrganizationDto): Promise<IOrganization> {
    const token = await this.kindService.getAccessToken();

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

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
