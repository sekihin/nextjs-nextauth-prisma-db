import { object, string } from "zod"
import  bcrypt from "bcrypt"

export function saltAndHashPassword(unHashPass: string) 
{
    return bcrypt.hash(unHashPass, 10).then(function(hash: string) 
    { 
        return hash; 
    });
}

export function isSamePass(unHashPass: string, hashPass: string) 
{
    return bcrypt.compare(unHashPass, hashPass).then(function(result: boolean) 
    { 
        return result; 
    });
}

export const signUpSchema = object({
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: string({ required_error: "Password is required" })
      .min(8, "Password must be more than 7 characters")
      .max(32, "Password must be less than 32 characters"),

   })

export const signInSchema = object({
    email: string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
  })