import { getGraphqlClient } from '@seek-n-grill/web/data-access-graphql'
import { webEnvironment } from '../environments/environment'

const { api } = webEnvironment

export const gql = getGraphqlClient(api.gqlUrl)
