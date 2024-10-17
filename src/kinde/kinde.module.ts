import { Module } from '@nestjs/common';
import { KindeService } from './kinde.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [KindeService,],
  exports: [KindeService],
})
export class KindeModule { }
