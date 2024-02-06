import RegisterForm from "@/components/registerForm";
import Image from "next/image";

export default function SignUp() {
  return (
    <section className="flex min-h-screen flex-col items-center">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={32}
        height={32}
        className="py-16"
      />

      <RegisterForm />
    </section>
  );
}
