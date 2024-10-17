import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { KindeModule } from '../kinde.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [UsersService],
  imports: [KindeModule, HttpModule],
  exports: [UsersService]
})
export class UsersModule { }
