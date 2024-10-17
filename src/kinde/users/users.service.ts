import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { KindeService } from '../kinde.service';
import { HttpService } from '@nestjs/axios';
import { KINDE_BASE_URL } from 'src/commons/constants';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    private readonly kindService: KindeService,
    private readonly httpService: HttpService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    const token = await this.kindService.getAccessToken();

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

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
