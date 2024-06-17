import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { KindeModule } from '../kinde.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [OrganizationsService],
  imports: [KindeModule, HttpModule],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
