import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { RestauranteController } from './restaurante.controller';
import { OrganizationsModule } from 'src/kinde/organizations/organizations.module';
import { UsersModule } from 'src/kinde/users/users.module';
import { ItemModule } from 'src/item/item.module';
import { CardapioModule } from 'src/cardapio/cardapio.module';
import { ConfiguracaoModule } from 'src/marmitex/configuracao/configuracao.module';

@Module({
  controllers: [RestauranteController],
  providers: [RestauranteService],
  exports: [RestauranteService],
  imports: [
    OrganizationsModule,
    UsersModule,
    ItemModule,
    CardapioModule,
    ConfiguracaoModule,
  ],
})
export class RestauranteModule {}
