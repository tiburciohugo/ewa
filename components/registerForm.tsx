"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const repeatpassword = formData.get("repeatpassword") as string;
    console.log(email, password, repeatpassword);

    if (password !== repeatpassword) {
      alert("Passwords do not match");
      return;
    }

    fetch("/api/auth/register", {
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
        alert("Account created");
        router.push("/");
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[327px] flex-col rounded-xl bg-navy-blue p-6"
    >
      <h1 className="text-3xl font-light text-white">Sign Up</h1>

      <div className="mt-4 flex flex-col space-y-2">
        <input
          type="email"
          name="email"
          id="email"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 transition duration-200 ease-in-out hover:border-white hover:placeholder-white focus:border-white  focus:outline-none"
          placeholder="Email address"
        />
        <input
          type="password"
          name="password"
          id="password"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 transition duration-200 ease-in-out hover:border-white hover:placeholder-white focus:border-white  focus:outline-none"
          placeholder="Password"
        />
        <input
          type="password"
          name="repeatpassword"
          id="repeatpassword"
          className="text-md rounded-md border-b-2 border-slate-500 bg-navy-blue p-4 font-light text-white placeholder-gray-500 transition duration-200 ease-in-out hover:border-white hover:placeholder-white focus:border-white  focus:outline-none"
          placeholder="Repeat Password"
        />
      </div>

      <div className="mt-12 flex flex-col space-y-2">
        <button
          type="submit"
          className="text-medium rounded-xl bg-bright-red p-4 font-extralight text-white transition duration-200 ease-in-out hover:bg-white hover:text-black focus:outline-none"
        >
          Create an account
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2">
        <p className="text-sm font-light text-white">
          Already have an account?
        </p>
        <Link
          href="/login"
          className="font-extralight text-bright-red transition duration-200 ease-in-out hover:text-white"
        >
          Login
        </Link>
      </div>
    </form>
  );
}
