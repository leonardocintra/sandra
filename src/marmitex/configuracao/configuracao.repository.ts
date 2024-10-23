import { AttributeValue, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { Injectable } from '@nestjs/common';
import { ConfiguracaoMarmitex } from './entities/configuracao.entity';
import { BaseRepository } from 'src/commons/repository/base-repository';

@Injectable()
export class ConfiguracaoRepository extends BaseRepository {
  constructor() {
    super('marmitex-configuracao');
  }

  async upsertOne(data: ConfiguracaoMarmitex): Promise<ConfiguracaoMarmitex> {
    const itemObject: Record<string, AttributeValue> = {
      restaurante: { S: data.restaurante },
      tipoMarmitex: { S: data.tipoMarmitex },
      maxCarnes: { N: data.maxCarnes.toString() },
      maxGuarnicoes: { N: data.maxGuarnicoes.toString() },
      maxSaladas: { N: data.maxSaladas.toString() },
      preco: { N: data.preco.toString() }
    };

    const command = new PutItemCommand({
      TableName: this.tableName,
      Item: itemObject,
    });

    const result = await this.client.send(command);
    this.logger.log(JSON.stringify(result));
    return data;
  }

  async findAll() {
    try {
      const result: ConfiguracaoMarmitex[] = [];
      const command = new ScanCommand({
        TableName: this.tableName,
      });

      const response = await this.client.send(command);

      if (response.Items) {
        response.Items.forEach((item) => {
          result.push(ConfiguracaoMarmitex.newInstanceFromDynamoDB(item));
        });
      }

      return result;
    } catch (err) {
      console.error('Error retrieving configuracao marmitex: ' + err.message);
      throw err;
    }
  }
}
