import Link from 'next/link';
import { Form } from '~/app/register/form';
import { redirect } from 'next/navigation';
import { createUserToDb, existUserByEmail } from '~/db/users';
import { SubmitButton } from '~/app/submit-button';
import { saltAndHashPassword } from "~/lib/zod"

export default function Login() {
  async function register(formData: FormData) {
    'use server';
    const email = formData.get('email') as string;
    const password = saltAndHashPassword(formData.get('password') as string);
    const user = await existUserByEmail(email);

    if (user) {
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await createUserToDb({ email, password });
      redirect('/signin');
    }
  }

  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center card shadow-md">
          <h3 className="text-xl font-semibold">Sign Up</h3>
          <p className="text-sm text-gray-500">
            Create an account with your email and password
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Sign Up</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {'Already have an account? '}
            <Link href="/signin" className="font-semibold text-gray-800">
              Sign in
            </Link>
            {' instead.'}
          </p>
        </Form>
      </div>
    </div>
  );
}
