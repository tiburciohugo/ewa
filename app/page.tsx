import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className=""
          />
          <div className="text-4xl font-bold text-white">
            Welcome to Movie App
          </div>
        </div>
      </div>
    </>
  );
}
