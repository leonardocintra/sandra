import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { Cardapio } from './entities/cardapio.entity';

@Injectable()
export class CardapioRepository {
  private readonly tableName = 'cardapio';
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
      const result: Cardapio[] = [];

      const command = new ScanCommand({
        TableName: this.tableName,
      });

      const response = await this.client.send(command);

      if (response.Items) {
        response.Items.forEach((item) => {
          result.push(Cardapio.newInstanceFromDynamoDB(item));
        });
      }

      return result;
    } catch (err) {
      console.error('Error retrieving cardapio:', err);
      throw err;
    }
  }
}
