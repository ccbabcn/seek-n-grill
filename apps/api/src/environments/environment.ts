const PRODUCTION = 'production'

export const apiEnvironment: IApiEnv = {
  isProd: process.env.SEEK_N_GRILL_ENV === PRODUCTION,
  api: {
    port: Number(process.env.SEEK_N_GRILL_API_PORT)
  },
  db: {
    url: process.env.SEEK_N_GRILL_DATABASE_URL
  }
}

export interface IApiEnv {
  isProd: boolean
  api: {
    port: number
  }
  db: {
    url: string
  }
}
