import LoginForm from "@/components/loginForm";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Login() {
  // const session = await getServerSession();

  // console.log('login session', session);
  // if (session) {
  //   redirect("/");
  // }

  return (
    <section className="flex min-h-screen flex-col items-center">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={32}
        height={32}
        className="py-16"
      />

      <LoginForm />
    </section>
  );
}
