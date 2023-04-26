import { gql } from 'graphql-request';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $password: String!, $email: String!) {
    createUser(data: { name: $name, password: $password, email: $email }) {
      id
      email
      name
    }
  }
`;
