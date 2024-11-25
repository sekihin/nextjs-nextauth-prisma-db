import { Prisma } from '@prisma/client'
import prisma from '~/lib/prisma'
import { v4 as uuidv4 } from 'uuid'

export const getUserFromDb = async (params) => {
    try {
      const user = await prisma.users.findUnique({
        where: {
          email: String(params?.email),
          password: String(params?.password),
        }
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          )
        }
      }
      throw error
    }
  };

  export const existUserByEmail = async (email) => {
    try {
      const user = await prisma.users.findUnique({
        where: {
          email: String(email),
        }
      });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        if (error.code === 'P2002') {
          console.log(
            'There is a unique constraint violation, a new user cannot be created with this email'
          )
        }
      }
      throw error
    }
  };

  export const createUserToDb = async (params) => {
      const user = await prisma.users.create({
        data: {
          id: uuidv4(),
          name: String(params?.name),
          email: String(params?.email),
          password: String(params?.password),
          role: "admin"
        },
      });
      return user
  };
  