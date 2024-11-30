import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { KindeModule } from '../kinde.module';
import { HttpModule } from '@nestjs/axios';
import { OrganizationsController } from './organizations.controller';
import { UsersModule } from '../users/users.module';

@Module({
  providers: [OrganizationsService],
  imports: [KindeModule, HttpModule, UsersModule],
  exports: [OrganizationsService],
  controllers: [OrganizationsController],
})
export class OrganizationsModule { }
