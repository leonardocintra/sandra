import { Module } from '@nestjs/common';
import { MarmitexService } from './marmitex.service';
import { MarmitexController } from './marmitex.controller';
import { RestauranteModule } from 'src/restaurante/restaurante.module';
import { TipoMarmitexModule } from './tipo-marmitex/tipo-marmitex.module';

@Module({
  controllers: [MarmitexController],
  providers: [MarmitexService],
  imports: [RestauranteModule, TipoMarmitexModule],
})
export class MarmitexModule {}
