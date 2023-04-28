/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { AppModule } from './app/app.module'
import helmet from '@fastify/helmet'
import { apiEnvironment } from './environments/environment'

const { isProd, api } = apiEnvironment
const { port } = api

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())
  await app.register(helmet, { contentSecurityPolicy: isProd })
  app.enableCors()
  await app.listen(port)
  Logger.log(`🚀 Application playground is running on: http://localhost:${port}/graphiql`)
}

// eslint-disable-next-line unicorn/prefer-top-level-await
bootstrap().catch(console.log)
