import {
  AttributeValue,
  DynamoDBClient,
  PutItemCommand,
  QueryCommand,
} from '@aws-sdk/client-dynamodb';
import { Injectable, Logger } from '@nestjs/common';
import { Cardapio } from './entities/cardapio.entity';

@Injectable()
export class CardapioRepository {
  private readonly logger = new Logger(CardapioRepository.name);

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

  async findByRestaurante(restaurante: string) {
    try {
      const result: Cardapio[] = [];

      const command = new QueryCommand({
        TableName: this.tableName,
        KeyConditionExpression: "restaurante = :a",
        ExpressionAttributeValues: {
          ":a": {
            S: restaurante
          }
        }
      });

      const response = await this.client.send(command);

      if (response.Items) {
        response.Items.forEach((item) => {
          result.push(Cardapio.newInstanceFromDynamoDB(item));
        });
      }

      return result;
    } catch (err) {
      this.logger.error('Error retrieving cardapio:', err)
      throw err;
    }
  }

  async upsertOne(data: Cardapio) {
    const itemObject: Record<string, AttributeValue> = {
      restaurante: { S: data.restaurante },
      tipo: { S: data.tipo },
      items: { SS: data.items },
    };

    const command = new PutItemCommand({
      TableName: this.tableName,
      Item: itemObject,
    });

    const result = await this.client.send(command);
    this.logger.log(JSON.stringify(result));
    return data;
  }
}
