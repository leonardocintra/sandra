import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { Configuracao } from './entities/configuracao.entity';

@Injectable()
export class ConfiguracaoRepository {
  private readonly tableName = 'marmitex-configuracao';
  private readonly client: DynamoDBClient;

  constructor() {
    this.client = new DynamoDBClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
  }

  async findAll() {
    try {
      const result: Configuracao[] = [];
      const command = new ScanCommand({
        TableName: this.tableName,
      });

      const response = await this.client.send(command);

      if (response.Items) {
        response.Items.forEach((item) => {
          result.push(Configuracao.newInstanceFromDynamoDB(item));
        });
      }

      return result;
    } catch (err) {
      console.error('Error retrieving items:' + err.message);
      throw err;
    }
  }
}
