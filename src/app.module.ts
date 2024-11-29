import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PrismaModule } from './prisma/prisma.module';
import { APP_FILTER } from '@nestjs/core';
import { PrismaExceptionsFilter } from './commons/prisma-exceptions/prisma-exceptions.filter';
import { AuthModule } from './auth/auth.module';
import { KindeModule } from './kinde/kinde.module';
import { MarmitexModule } from './marmitex/marmitex.module';
import { ItemModule } from './item/item.module';
import { CardapioModule } from './cardapio/cardapio.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [
    RestauranteModule,
    PrismaModule,
    AuthModule,
    KindeModule,
    MarmitexModule,
    ItemModule,
    CardapioModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionsFilter,
    },
  ],
})
export class AppModule { }
