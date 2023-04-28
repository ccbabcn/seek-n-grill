import { plainToInstance, Type } from 'class-transformer'
import { IApiEnv, apiEnvironment } from '../../apps/api/src/environments/environment'
import {
  IsBoolean,
  IsDefined,
  IsNumber,
  IsString,
  ValidateNested,
  IsNotEmpty,
  validateSync
} from 'class-validator'
import 'reflect-metadata'

export class ApiEnvVo implements IApiEnv {
  @IsBoolean()
  public isProd: boolean

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvDbVo)
  public db: ApiEnvDbVo

  @IsDefined()
  @ValidateNested()
  @Type(() => ApiEnvApiVo)
  public api: ApiEnvApiVo
}

class ApiEnvDbVo {
  @IsNotEmpty()
  @IsString()
  public url: string
}

class ApiEnvApiVo {
  @IsNumber()
  public port: number
}

const apiEnvVoInstance = plainToInstance(ApiEnvVo, apiEnvironment)
const errors = validateSync(apiEnvVoInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}

console.info(`All good on API environment`)
