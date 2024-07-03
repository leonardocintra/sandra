import { Test, TestingModule } from '@nestjs/testing';
import { RestauranteService } from './restaurante.service';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';

describe('RestauranteService', () => {
  let service: RestauranteService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RestauranteService,
        {
          provide: PrismaService,
          useValue: {
            restaurante: {
              create: jest.fn(),
            },
          },
        },
        {
          provide: OrganizationsService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<RestauranteService>(RestauranteService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  it('should create a restaurant', async () => {
    const createRestauranteDto: CreateRestauranteDto = {
      descricao: 'Restaurante Teste',
    };

    const result = { id: 1, descricao: 'Restaurante Teste', ativo: true };
    jest.spyOn(prismaService.restaurante, 'create').mockResolvedValue(result);

    expect(await service.create(createRestauranteDto)).toEqual(result);
    expect(prismaService.restaurante.create).toHaveBeenCalledWith({
      data: createRestauranteDto,
    });
  });
});
