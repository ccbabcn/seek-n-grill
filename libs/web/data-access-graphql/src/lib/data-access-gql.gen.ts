import * as Types from './types';

import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type GetUsersVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsers = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, email: string, name?: string | null }> };

export type CreateUserVariables = Types.Exact<{
  name: Types.Scalars['String'];
  password: Types.Scalars['String'];
  email: Types.Scalars['String'];
}>;


export type CreateUser = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, email: string, name?: string | null } };


export const GetUsersDocument = /*#__PURE__*/ gql`
    query GetUsers {
  users {
    id
    email
    name
  }
}
    `;
export const CreateUserDocument = /*#__PURE__*/ gql`
    mutation CreateUser($name: String!, $password: String!, $email: String!) {
  createUser(data: {name: $name, password: $password, email: $email}) {
    id
    email
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetUsers(variables?: GetUsersVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsers> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsers>(GetUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUsers', 'query');
    },
    CreateUser(variables: CreateUserVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUser> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUser>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateUser', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;