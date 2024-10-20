import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class BaseRepository {
  protected readonly logger: Logger;
  protected readonly client: DynamoDBClient
  protected tableName: string;

  constructor(tableName: string) {
    this.logger = new Logger(this.constructor.name);
    this.tableName = tableName;
    this.client = new DynamoDBClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    })
  }
}