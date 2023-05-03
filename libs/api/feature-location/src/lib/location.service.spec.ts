import { Test, TestingModule } from '@nestjs/testing'
import { LocationService } from './location.service'
import { PrismaService } from '@seek-n-grill/api/data-access-db'

describe('LocationService', () => {
  let service: LocationService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationService, PrismaService]
    }).compile()

    service = module.get<LocationService>(LocationService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
