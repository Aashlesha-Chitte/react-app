import gql from "graphql-tag";

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      message
      status
      data {
        name
        price
        quantity
        state
      }
    }
  }
`;
