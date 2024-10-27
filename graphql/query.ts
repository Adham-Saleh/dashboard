export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      avatar
      email
      role
      creationAt
    }
  }
`;


export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
      avatar
      id
      email
      role
    }
  }
`;
