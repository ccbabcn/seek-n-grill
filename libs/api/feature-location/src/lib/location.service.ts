import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from '@seek-n-grill/api/data-access-db'
import {
  CreateOneLocationArgs,
  DeleteOneLocationArgs,
  FindUniqueLocationOrThrowArgs,
  UpdateOneLocationArgs
} from '@seek-n-grill/api/generated-db-types'

const include: Prisma.LocationInclude = {
  rgbBackground: true
}

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOneLocationArgs: CreateOneLocationArgs) {
    const { data } = createOneLocationArgs
    return this.prisma.location.create({ data, include })
  }

  findAll() {
    return this.prisma.location.findMany()
  }

  findOne(findUniqueLocationOrThrowArgs: FindUniqueLocationOrThrowArgs) {
    const { where } = findUniqueLocationOrThrowArgs

    return this.prisma.location.findUnique({
      where,
      include
    })
  }

  update(updateOneLocationArgs: UpdateOneLocationArgs) {
    const { where, data } = updateOneLocationArgs
    return this.prisma.location.update({ where, data, include })
  }

  remove(deleteOneLocationArgs: DeleteOneLocationArgs) {
    const { where } = deleteOneLocationArgs

    return this.prisma.location.delete({ where, include })
  }
}
