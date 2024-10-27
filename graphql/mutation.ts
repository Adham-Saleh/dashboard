export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
    $role: Role!
    $avatar: String!
  ) {
    addUser(
      data: {
        name: $name
        email: $email
        password: $password
        role: $role
        avatar: $avatar
      }
    ) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String, $email: String, $role: Role) {
    updateUser(id: $id, changes: { name: $name, email: $email, role: $role }) {
      id
      name
      email
      role
    }
  }
`;

export const DELETE_USER = gql`
  mutation($id: ID!) {
    deleteUser(id: $id)
}
`;
