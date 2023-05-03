import { Module } from '@nestjs/common'
import { LocationService } from './location.service'
import { LocationResolver } from './location.resolver'
import { PrismaService } from '@seek-n-grill/api/data-access-db'

@Module({
  providers: [LocationResolver, LocationService, PrismaService]
})
export class LocationModule {}
