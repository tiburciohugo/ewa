import Trending from "@/components/trending";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex h-screen w-screen flex-col">
      <Trending />
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4">
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={100}
          height={100}
          className=""
        />
        <div className="text-center text-4xl font-bold text-white">
          Welcome to Movie App
        </div>
      </div>
    </section>
  );
}
