import { Module } from '@nestjs/common';
import { TipoItemService } from './tipo-item.service';
import { TipoItemController } from './tipo-item.controller';

@Module({
  controllers: [TipoItemController],
  providers: [TipoItemService],
})
export class TipoItemModule {}
