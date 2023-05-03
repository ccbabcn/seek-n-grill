import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { LocationService } from './location.service'
import {
  CreateOneLocationArgs,
  FindUniqueLocationOrThrowArgs,
  Location
} from '@seek-n-grill/api/generated-db-types'
import { UpdateOneLocationArgs } from '@seek-n-grill/api/generated-db-types'
import { DeleteOneLocationArgs } from '@seek-n-grill/api/generated-db-types'

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation(() => Location)
  createLocation(@Args() createOneLocationArgs: CreateOneLocationArgs) {
    return this.locationService.create(createOneLocationArgs)
  }

  @Query(() => [Location])
  locations() {
    return this.locationService.findAll()
  }

  @Query(() => Location)
  location(@Args() findUniqueLocationOrThrowArgs: FindUniqueLocationOrThrowArgs) {
    return this.locationService.findOne(findUniqueLocationOrThrowArgs)
  }

  @Mutation(() => Location)
  updateLocation(@Args() updateOneLocationArgs: UpdateOneLocationArgs) {
    return this.locationService.update(updateOneLocationArgs)
  }

  @Mutation(() => Location)
  removeLocation(@Args() deleteOneLocationArgs: DeleteOneLocationArgs) {
    return this.locationService.remove(deleteOneLocationArgs)
  }
}
