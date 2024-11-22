import Link from 'next/link';
import { Form } from '~/app/register/form';
import { redirect } from 'next/navigation';
import { createUserToDb, existUserByEmail } from '~/db/users';
import { SubmitButton } from '~/app/submit-button';
import { saltAndHashPassword } from "~/lib/zod"

export default function RegisterForm() {
  async function onSubmitHandler(formData: FormData) {
    'use server';
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = saltAndHashPassword(formData.get('password') as string);
    const user = await existUserByEmail(email);

    if (user) {
      return 'User already exists'; // TODO: Handle errors with useFormStatus
    } else {
      await createUserToDb({ name, email, password });
      redirect('/signin');
    }
  }

  return (
    <div className="container">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2">
          <div className="md:w-6/12 px-2">
            <img src="/undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
          </div>
          <div className="md:w-6/12 px-2 contents">
            <div className="flex flex-wrap -mx-2 justify-center">
              <div className="flex flex-col items-center card shadow-md">
                <h3 className="text-xl font-semibold">Sign Up</h3>
                <p className="text-sm text-gray-500">
                  Create an account with your email and password
                </p>
              </div>
              <Form action={onSubmitHandler}>
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
        </div>
      </div>
    </div>
  );
}
