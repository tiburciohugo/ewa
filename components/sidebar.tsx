import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LogoutForm from "./logoutForm";
import { getSession } from "@/app/actions";
import NavbarLinks from "./navbarLinks";
import LoginButton from "./ui/loginButton";

export default async function Sidebar() {
  const session = await getSession();

  return (
    <nav className="absolute top-0 flex w-full items-center justify-between bg-navy-blue p-4 md:m-[3%] md:max-w-[719px] md:rounded-xl lg:left-0 lg:my-4 lg:ml-4 lg:h-full lg:max-h-[960px] lg:w-24 lg:flex-col">
      <Link
        href="/"
        className="inline-block cursor-pointer transition delay-200 ease-in-out hover:opacity-80"
      >
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={30}
          height={30}
          className=""
        />
      </Link>

      <NavbarLinks />

      <Popover>
        <PopoverTrigger>
          <Image
            src={"/image-avatar.png"}
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full border-2 border-white"
          />
        </PopoverTrigger>
        <PopoverContent className="ml-4 mt-4 bg-navy-blue text-slate-100 md:mr-2 hover:bg-midnight-blue">
          {!session.isLoggedIn && <LoginButton />}
          {session.isLoggedIn && <LogoutForm />}
        </PopoverContent>
      </Popover>
    </nav>
  );
}
