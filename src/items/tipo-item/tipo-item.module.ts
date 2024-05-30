import { Module } from '@nestjs/common';
import { TipoItemService } from './tipo-item.service';
import { TipoItemController } from './tipo-item.controller';

@Module({
  controllers: [TipoItemController],
  providers: [TipoItemService],
  exports: [TipoItemService],
})
export class TipoItemModule {}
