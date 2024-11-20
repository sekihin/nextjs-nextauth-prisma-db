// pages/admin.tsx
import Link from "next/link";
import React from "react";
import { Metadata } from 'next'
import { auth, signOut } from '~/app/auth'

export const metadata: Metadata = {
  title: 'Admin Dashboard',
}

export default async function AdminPage() {

  const session = await auth()

  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">Admin Page</h1>

          <div className="w-screen h-screen flex flex-col space-y-5 justify-center items-center text-white">
            You are logged in as {session?.user?.email}
          </div>

          <Link className="btn btn-primary" href="/">
            Go to Index Page
          </Link>

          <SignOut />
        </div>
      </div>
    </div>
  );
};

function SignOut() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button type="submit" className="btn btn-accent btn-outline">Sign out</button>
    </form>
  );
}