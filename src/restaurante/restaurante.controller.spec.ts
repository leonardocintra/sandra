import { Test, TestingModule } from '@nestjs/testing';
import { RestauranteController } from './restaurante.controller';
import { RestauranteService } from './restaurante.service';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';
import { KindeService } from 'src/kinde/kinde.service';
import { HttpService } from '@nestjs/axios';

describe('RestauranteController', () => {
  let controller: RestauranteController;
  let prismaService: PrismaService;
  let organizationService: OrganizationsService;
  let kindeService: KindeService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestauranteController],
      providers: [
        RestauranteService,
        {
          provide: PrismaService,
          useClass: PrismaService,
        },
        {
          provide: OrganizationsService,
          useClass: OrganizationsService,
        },
        {
          provide: KindeService,
          useClass: KindeService,
        },
        {
          provide: HttpService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<RestauranteController>(RestauranteController);
    prismaService = module.get<PrismaService>(PrismaService);
    kindeService = module.get<KindeService>(KindeService);
    httpService = module.get<HttpService>(HttpService);
    organizationService =
      module.get<OrganizationsService>(OrganizationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(prismaService).toBeDefined();
    expect(organizationService).toBeDefined();
    expect(kindeService).toBeDefined();
    expect(httpService).toBeDefined();
  });
});
