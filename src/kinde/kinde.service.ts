import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { KINDE_BASE_URL } from 'src/commons/constants';

@Injectable()
export class KindeService {
  private accessToken: string;

  constructor(private httpService: HttpService) {}

  async getAccessToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    const params = new URLSearchParams({
      audience: `${KINDE_BASE_URL}/api`,
      grant_type: 'client_credentials',
      client_id: process.env.KINDE_CLIENT_ID,
      client_secret: process.env.KINDE_CLIENT_SECRET,
    });

    const headers = {
      'content-type': 'application/x-www-form-urlencoded',
    };

    const response = await firstValueFrom(
      this.httpService.post(`${KINDE_BASE_URL}/oauth2/token`, params.toString(), {
        headers,
      }),
    );

    this.accessToken = response.data.access_token;
    return this.accessToken;
  }
}
