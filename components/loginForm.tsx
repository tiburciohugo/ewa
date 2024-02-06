"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function LoginForm() {
    const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;

    fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
          return;
        }
          alert("Logged in");
          router.push("/");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[327px] flex-col rounded-xl bg-navy-blue p-6"
    >
      <Link href="/login">
        <h1 className="text-3xl font-light text-white">Login</h1>
      </Link>

      <div className="mt-4 flex flex-col space-y-2">
        <input
          type="email"
          name="email"
          id="email"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 focus:outline-none"
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 focus:outline-none"
          placeholder="Password"
        />
      </div>

      <div className="mt-12 flex flex-col space-y-2">
        <button
          type="submit"
          className="text-medium rounded-xl bg-bright-red p-4 font-extralight text-white focus:outline-none"
        >
          Login to your account
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm font-light text-white">
          Don&apos;t have an account?
        </p>
        <Link href="/signup" className="font-extralight text-bright-red">
          Sign up
        </Link>
      </div>
    </form>
  );
}
