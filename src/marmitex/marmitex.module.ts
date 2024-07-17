import { Module } from '@nestjs/common';
import { MarmitexService } from './marmitex.service';
import { MarmitexController } from './marmitex.controller';
import { RestauranteModule } from 'src/restaurante/restaurante.module';
import { TipoMarmitexModule } from './tipo-marmitex/tipo-marmitex.module';
import { ConfiguracaoModule } from './configuracao/configuracao.module';

@Module({
  controllers: [MarmitexController],
  providers: [MarmitexService],
  imports: [RestauranteModule, TipoMarmitexModule, ConfiguracaoModule],
})
export class MarmitexModule {}
