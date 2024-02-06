import LoginForm from "@/components/loginForm";
import Image from "next/image";

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

      <LoginForm />
    </section>
  );
}
