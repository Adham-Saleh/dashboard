export interface User {
  __typename: string;
  id: string;
  name: string;
  avatar: string;
  email: string;
  creationAt: string;
  role: string;
}

enum Role {
  admin = "admin",
  customer = "customer",
}

export interface userUpdate {
  id: string;
  name: string;
  email: string;
  role: Role;
}
