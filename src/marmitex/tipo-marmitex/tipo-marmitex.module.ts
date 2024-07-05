import { Module } from '@nestjs/common';
import { TipoMarmitexService } from './tipo-marmitex.service';
import { TipoMarmitexController } from './tipo-marmitex.controller';
import { RestauranteModule } from 'src/restaurante/restaurante.module';

@Module({
  controllers: [TipoMarmitexController],
  providers: [TipoMarmitexService],
  imports: [RestauranteModule],
})
export class TipoMarmitexModule {}
