import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeIcon from "../public/icon-nav-home.svg";
import MoviesIcon from "../public/icon-nav-movies.svg";
import TvIcon from "../public/icon-nav-tv-series.svg";
import BookmarkIcon from "../public/icon-nav-bookmark.svg";
import SignoutButton from "./ui/signoutButton";

export default function Sidebar() {
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

      <div className="absolute left-0 right-0 mx-auto flex w-full items-center justify-evenly lg:top-20">
        <ul className="flex space-x-4 lg:flex-col lg:justify-center lg:justify-items-center lg:space-x-0 lg:space-y-6">
          <li>
            <Link href="/">
              <HomeIcon className="text-steel-blue transition delay-200 ease-in-out hover:text-white focus:text-white active:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/movies"}>
              <MoviesIcon className="text-steel-blue transition delay-200 ease-in-out hover:text-white active:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/tvseries"}>
              <TvIcon className="text-steel-blue transition delay-200 ease-in-out hover:text-white active:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/bookmarks"}>
              <BookmarkIcon className="text-steel-blue transition delay-200 ease-in-out hover:text-white active:text-white" />
            </Link>
          </li>
        </ul>
      </div>

      <SignoutButton />

      <Image
        src={"/image-avatar.png"}
        alt="avatar"
        width={30}
        height={30}
        className="rounded-full border-2 border-white"
      />
    </nav>
  );
}
