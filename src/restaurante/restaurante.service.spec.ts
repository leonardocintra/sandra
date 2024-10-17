import { Test, TestingModule } from '@nestjs/testing';
import { RestauranteService } from './restaurante.service';
import { PrismaService } from 'src/prisma.service';
import { OrganizationsService } from 'src/kinde/organizations/organizations.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { NotFoundException } from '@nestjs/common';

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
              findMany: jest.fn(),
              findFirstOrThrow: jest.fn(),
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
      userId: "384932842984989"
    };

    const result = { id: 1, descricao: 'Restaurante Teste', ativo: true };
    jest.spyOn(prismaService.restaurante, 'create').mockResolvedValue(result);

    expect(await service.create(createRestauranteDto)).toEqual(result);
    expect(prismaService.restaurante.create).toHaveBeenCalledWith({
      data: createRestauranteDto,
    });
  });

  it('should return an array of restaurants', async () => {
    const mockRestaurants = [
      { id: 1, descricao: 'Restaurant 1', ativo: true },
      { id: 2, descricao: 'Restaurant 2', ativo: true },
    ];
    jest
      .spyOn(prismaService.restaurante, 'findMany')
      .mockResolvedValue(mockRestaurants);

    const result = await service.findAll();
    expect(result).toEqual(mockRestaurants);
    expect(prismaService.restaurante.findMany).toHaveBeenCalled();
  });

  it('should return a restaurant by id', async () => {
    const mockRestaurant = { id: 1, descricao: 'Restaurant 1', ativo: true };
    jest
      .spyOn(prismaService.restaurante, 'findFirstOrThrow')
      .mockResolvedValue(mockRestaurant);

    const result = await service.findOne(1);
    expect(result).toEqual(mockRestaurant);
    expect(prismaService.restaurante.findFirstOrThrow).toHaveBeenCalledWith({
      where: { id: 1 },
    });
  });

  it('should throw an error if restaurant is not found', async () => {
    jest
      .spyOn(prismaService.restaurante, 'findFirstOrThrow')
      .mockRejectedValue(new NotFoundException());

    await expect(service.findOne(31)).rejects.toThrow(NotFoundException);
  });
});
