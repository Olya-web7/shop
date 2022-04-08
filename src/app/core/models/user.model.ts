export interface User {
  id: number;
  fullName: string;
  email: string;
  role: Role;
}

export enum Role {
  User = 'User',
  Admin = 'Admin',
}