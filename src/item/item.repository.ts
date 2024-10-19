import { AttributeValue, DynamoDBClient, PutItemCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { Injectable, Logger } from '@nestjs/common';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemRepository {
  private readonly logger = new Logger(ItemRepository.name);

  private readonly tableName = 'items';
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
