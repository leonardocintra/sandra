import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TipoItemModule } from '../tipo-item/tipo-item.module';

@Module({
  controllers: [ItemController],
  providers: [ItemService],
  imports: [TipoItemModule],
  exports: [ItemService]
})
export class ItemModule { }
