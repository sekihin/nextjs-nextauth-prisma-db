"use client"

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import Link from 'next/link'
import { SubmitButton } from '~/app/submit-button'

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = decodeURI(searchParams?.get('callbackUrl') ?? "/");
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      callbackUrl: callbackUrl ?? "/",
      redirect: false,
    });
    if (result?.error) {
      setError(result.error);
    }
    if (result?.ok) {
      router.push(callbackUrl);
    }
  };

  const input_style =
  "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";


  return (
    <div className="container">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2">
          <div className="md:w-6/12 px-2">
            <img src="/undraw_remotely_2j6y.svg" alt="Image" className="img-fluid" />
          </div>
          <div className="md:w-6/12 px-2 contents">
            <div className="flex flex-wrap -mx-2 justify-center">
              <form className="card-body w-96" onSubmit={handleSubmit}>
                <h1 className="text-4xl my-8">Sign In</h1>
                <p className="text-sm text-gray-500">
                Use your email and password to sign in
                </p>
                {!!error && <p className="text-error">ERROR: {error}</p>}
                <input
                  type="text"
                  className={`${input_style}`}
                  placeholder="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="password"
                  className={`${input_style}`}
                  placeholder="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <SubmitButton>Sign In</SubmitButton>
                <p className="text-center text-sm text-gray-600">
                {"Don't have an account? "}
                <Link href="/register" className="font-semibold text-gray-800">
                  Sign up
                </Link>
                {' for free.'}
                </p>

                
                <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
                  <p className='text-center font-semibold mx-4 mb-0'>OR</p>
                </div>

                  <a
                    className='px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-[#3b5998] h-2'
                    onClick={() => signIn('google', { callbackUrl })}
                    role='button'
                  >
                    <img
                      className='pr-2'
                      src='/images/google.svg'
                      alt=''
                      width={35}
                      height={35}
                    />
                    Continue with Google
                  </a>
                  <a
                    className='px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center bg-[#55acee] h-2'
                    onClick={() => signIn('github', { callbackUrl })}
                    role='button'
                  >
                    <img
                      className='pr-2'
                      src='/images/github.svg'
                      alt=''
                      width={40}
                      height={40}
                    />
                    Continue with GitHub
                  </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
