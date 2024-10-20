import {
  AttributeValue,
  PutItemCommand,
  QueryCommand,
} from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { Cardapio } from './entities/cardapio.entity';
import { BaseRepository } from 'src/commons/repository/base-repository';

@Injectable()
export class CardapioRepository extends BaseRepository {

  constructor() {
    super('cardapio')
  }

  async findByRestaurante(restaurante: string): Promise<Cardapio[]> {
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

  async upsertOne(data: Cardapio): Promise<Cardapio> {
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
