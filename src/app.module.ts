import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteModule } from './restaurante/restaurante.module';
import { PrismaModule } from './prisma/prisma.module';
import { ItemModule } from './items/item/item.module';
import { TipoItemModule } from './items/tipo-item/tipo-item.module';

@Module({
  imports: [RestauranteModule, PrismaModule, ItemModule, TipoItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
