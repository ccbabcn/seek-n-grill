import { getGraphqlClient } from '@seek-n-grill/web/data-access-graphql'

export const gql = getGraphqlClient('http://localhost:3000/graphql')
