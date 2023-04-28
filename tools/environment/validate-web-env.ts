import { plainToInstance, Type } from 'class-transformer'
import { IWebEnv, webEnvironment } from '../../apps/web/environments/environment'
import { IsBoolean, IsUrl, ValidateNested, IsString, validateSync } from 'class-validator'
import 'reflect-metadata'

export class WebEnvVo implements IWebEnv {
  @IsBoolean()
  public isProd: boolean

  @ValidateNested()
  @Type(() => WebEnvApiVo)
  public api: WebEnvApiVo
}

class WebEnvApiVo {
  @IsUrl({ require_tld: false })
  public gqlUrl: string
}

const webEnvVoInstance = plainToInstance(WebEnvVo, webEnvironment)
const errors = validateSync(webEnvVoInstance)

if (errors.length) {
  console.error(errors)
  process.exit(1)
}

console.info(`All good on WEB environment`)
