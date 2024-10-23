import { Module } from '@nestjs/common';
import { ConfiguracaoService } from './configuracao.service';
import { ConfiguracaoController } from './configuracao.controller';
import { ConfiguracaoRepository } from './configuracao.repository';

@Module({
  controllers: [ConfiguracaoController],
  providers: [ConfiguracaoService, ConfiguracaoRepository],
  exports: [ConfiguracaoService]
})
export class ConfiguracaoModule { }
