import { Controller, Get, Param } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationService: OrganizationsService) { }

  @Get('/user/:user')
  findByUser(@Param('user') user: string) {
    return this.organizationService.findByUserId(user);
  }
}
