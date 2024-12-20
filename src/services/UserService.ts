// services/UserService.ts
import { User } from 'next-auth';

// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from '@/lib/zod';

import { getUserFromDb } from '@/db/users';

import { IUserService } from './IUserService';

export class InMemoryUserService implements IUserService {
  async signInCredentials(email: string, password: string): Promise<User> {
    // await the password hashing
    const hashedPassword = await saltAndHashPassword(password);

    // await the user lookup
    const user = await getUserFromDb({ email, password: hashedPassword });

    if (!user) {
      throw new Error('Invalid email or password');
    }
    return user as User;
  }
}

export const userService = new InMemoryUserService();
