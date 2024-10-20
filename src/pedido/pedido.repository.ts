import {
  ScanCommand,
} from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { Pedido } from './entities/pedido.entity';
import { BaseRepository } from 'src/commons/repository/base-repository';

@Injectable()
export class PedidoRepository extends BaseRepository {
  constructor() {
    super('pedido')
  }

  async findAll() {
    try {
      const result: Pedido[] = [];

      const command = new ScanCommand({
        TableName: this.tableName,
      });

      const response = await this.client.send(command);

      if (response.Items) {
        response.Items.forEach((item) => {
          result.push(Pedido.newInstanceFromDynamoDB(item));
        });
      }

      return result;
    } catch (err) {
      console.error('Error retrieving pedido:', err);
      throw err;
    }
  }
}
