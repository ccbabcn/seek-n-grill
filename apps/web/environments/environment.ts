const PRODUCTION = 'production'

export const webEnvironment: IWebEnv = {
  isProd: process.env.SEEK_N_GRILL_ENV === PRODUCTION,
  api: {
    gqlUrl: process.env.SEEK_N_GRILL_WEB_GQL_URL
  }
}

export interface IWebEnv {
  isProd: boolean
  api: {
    gqlUrl: string
  }
}
