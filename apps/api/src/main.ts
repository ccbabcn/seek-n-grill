/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app/app.module'
import helmet from '@fastify/helmet'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  //implement real contentSecurityPolicy for porduction
  await app.register(helmet, { contentSecurityPolicy: false })
  app.enableCors()

  const port = process.env.PORT || 3000
  await app.listen(port)
  Logger.log(`🚀 Application playground is running on: http://localhost:${port}/graphiql`)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch(console.log)
