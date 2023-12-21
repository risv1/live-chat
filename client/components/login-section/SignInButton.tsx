"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <>
      <div className="flex flex-col w-60 items-center gap-6">
        <button onClick={()=>signIn("google")} className="w-full h-14 bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300">
          Sign-In with Google
        </button>
        <button onClick={()=>signIn("gitHub")} className="w-full h-14 bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-700 hover:shadow-lg focus:outline-none focus:ring focus:border-gray-300">
          Other sign-in methods
        </button>
      </div>
    </>
  );
};

export default SignInButton;
