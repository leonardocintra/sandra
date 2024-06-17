import { Module } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';
import { RestauranteController } from './restaurante.controller';
import { OrganizationsModule } from 'src/kinde/organizations/organizations.module';

@Module({
  controllers: [RestauranteController],
  providers: [RestauranteService],
  exports: [RestauranteService],
  imports: [OrganizationsModule],
})
export class RestauranteModule {}
