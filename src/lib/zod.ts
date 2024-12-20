import bcrypt from 'bcryptjs';
import { object, string } from 'zod';
import { z } from 'zod';

export function saltAndHashPassword(unHashPass: string) {
  return bcrypt.hash(unHashPass, 10).then(function (hash: string) {
    return hash;
  });
}

export function isSamePass(unHashPass: string, hashPass: string) {
  return bcrypt.compare(unHashPass, hashPass).then(function (result: boolean) {
    return result;
  });
}

export const signUpSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must not exceed 50 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const signInSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
});
