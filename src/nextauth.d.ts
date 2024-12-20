import { DefaultUser } from 'next-auth';
// Define a role enum
export enum RoleEnum {
  user = 'user',
  admin = 'admin',
}

//common interface for JWT and Session
interface IUser extends DefaultUser {
  role?: RoleEnum;
  id: string;
  email: string;
  name: string;
}
declare module 'next-auth' {
  interface User extends IUser {
    password?: string;
  }
  interface Session {
    user: User;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {
    iat?: number;
    exp?: number;
  }
}
