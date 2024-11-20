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
  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center card shadow-md">
          <form className="card-body w-96" onSubmit={handleSubmit}>
            <h1 className="text-4xl my-8">Sign In</h1>
            <p className="text-sm text-gray-500">
            Use your email and password to sign in
          </p>
            {!!error && <p className="text-error">ERROR: {error}</p>}
            <input
              type="text"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
