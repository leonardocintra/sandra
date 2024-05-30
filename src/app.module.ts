import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PrismaModule } from './prisma/prisma.module';
import { ItemModule } from './items/item/item.module';
import { TipoItemModule } from './items/tipo-item/tipo-item.module';
import { APP_FILTER } from '@nestjs/core';
import { PrismaExceptionsFilter } from './commons/prisma-exceptions/prisma-exceptions.filter';

@Module({
  imports: [RestauranteModule, PrismaModule, ItemModule, TipoItemModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: PrismaExceptionsFilter,
    },
  ],
})
export class AppModule {}
