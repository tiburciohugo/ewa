"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response.json().then((data) => {
      if (data.error) {
        console.error(data.error);
      } else {
        router.push("/");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[327px] flex-col rounded-xl bg-navy-blue p-6"
    >
      <h1 className="text-3xl font-light text-white">Login</h1>

      <div className="mt-4 flex flex-col space-y-2 caret-bright-red">
        <input
          type="email"
          name="email"
          id="email"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 transition duration-200 ease-in-out hover:border-white hover:placeholder-white focus:border-white  focus:outline-none"
          placeholder="Email address"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 transition duration-200 ease-in-out hover:border-white hover:placeholder-white focus:border-white  focus:outline-none"
          placeholder="Password"
          required
        />
      </div>

      <div className="mt-12 flex flex-col space-y-2">
        <button
          type="submit"
          className="text-medium rounded-xl bg-bright-red p-4 font-extralight text-white transition duration-200 ease-in-out hover:bg-white hover:text-black  focus:outline-none"
        >
          Login to your account
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm font-light text-white">
          Don&apos;t have an account?
        </p>
        <Link
          href="/signup"
          className="font-extralight text-bright-red transition duration-200 ease-in-out  hover:text-white"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
}
