import gql from "graphql-tag";

export const GET_USERS = gql`
  query getUsers {
    getUsers {
      message
      status
      data {
        name
        role
      }
    }
  }
`;
