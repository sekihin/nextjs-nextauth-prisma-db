import NextAuth, { DefaultSession }  from "next-auth"
import "next-auth/jwt"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { signInSchema } from "~/lib/zod"
import { userService } from "~/services/UserService"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '~/lib/prisma';


// https://zhuanlan.zhihu.com/p/459906710
// https://vercel.com/guides/nextjs-prisma-postgres
// https://blog.lama.dev/role-based-auth-prisma-next-auth/
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),    
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      name: "Credentials",
      id: "credentials",      
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials) {
            throw new Error("No credentials.");
          }
 
          const { email, password } = await signInSchema.parseAsync(credentials)
 
          // return JSON object with the user data
          return userService.signInCredentials(email, password);
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null
          }
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: "test",
  },
  callbacks: {
    async jwt({ token }) {
      const dbUser = await prisma.users.findUnique({
        where: {
          email: token.email!,
        },
      });
      token.roles = dbUser.roles

      return token;
    },
    session: async ({ session, token, user }) => {
      if (session?.user && token) {
        session.user.email = token.id as string;
      }
      if (token) {
        session.user.roles = token.roles
      }
      return session;
    },
  },
})

declare module "next-auth" {
  interface Session {
    user: {
      roles: string // adjust type as needed
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    roles: string // adjust type as needed
  }
}