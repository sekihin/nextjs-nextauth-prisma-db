import React from 'react';
export function Form({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  
  const input_style =
    "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

  return (
    <form
      action={action}
      className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name..."
          autoComplete="email"
          required
          className={`${input_style}`}
        />
      </div>      
      <div>
        <label
          htmlFor="email"
          className="block text-xs text-gray-600 uppercase"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email address..."
          autoComplete="email"
          required
          className={`${input_style}`}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-xs text-gray-600 uppercase"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*************"
          required
          className={`${input_style}`}
        />
      </div>
      <div>
        <label
          htmlFor="repeat-pass"
          className="block text-xs text-gray-600 uppercase"
        >
          Repeat Password
        </label>
        <input
          id="repeat-pass"
          name="repeat-pass"
          type="password"
          placeholder="*************"
          required
          className={`${input_style}`}
        />
      </div>
      {children}
    </form>
  );
}
