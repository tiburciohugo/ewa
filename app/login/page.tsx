import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={32}
        height={32}
        className="py-16"
      />

      <form className="flex w-[327px] flex-col rounded-xl bg-navy-blue p-6">
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
    </section>
  );
}
