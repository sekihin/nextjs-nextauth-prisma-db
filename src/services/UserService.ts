// services/UserService.ts
import { User } from "next-auth";
import { IUserService } from "./IUserService";

// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from "~/lib/zod"
import { getUserFromDb } from "~/db/users"

export class InMemoryUserService implements IUserService {
  signInCredentials(email: string, password: string): User | Promise<User> {
    
    // logic to salt and hash password
    password  = saltAndHashPassword(password)

    // logic to verify if the user exists
    const user = getUserFromDb({email, password})

    if (!user) {
      throw new Error("Invalid email or password");
    }
    return user;
  }
}

export const userService = new InMemoryUserService();