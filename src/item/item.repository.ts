import { AttributeValue, DynamoDBClient, PutItemCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';
import { BaseRepository } from 'src/commons/repository/base-repository';

@Injectable()
export class ItemRepository extends BaseRepository {

  constructor() {
    super('items')
  }

  async findByOne(restaurante: string) {
    try {
      const result: Item[] = [];

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
          result.push(Item.newInstanceFromDynamoDB(item));
        });
      }

      return result;
    } catch (err) {
      this.logger.error('Error retrieving items:', err)
      throw err;
    }
  }

  async upsertOne(data: CreateItemDto) {
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
