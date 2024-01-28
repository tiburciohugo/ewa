import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeIcon from "../public/icon-nav-home.svg";
import MoviesIcon from "../public/icon-nav-movies.svg";
import TvIcon from "../public/icon-nav-tv-series.svg";
import BookmarkIcon from "../public/icon-nav-bookmark.svg";

export default function Sidebar() {
  return (
    <nav className="absolute top-0 flex items-center justify-between w-full p-4 bg-navy-blue lg:flex-col lg:left-0 lg:h-full lg:w-24 lg:max-h-[58rem] lg:ml-4 lg:my-4 lg:rounded-xl">
      <Link
        href="/"
        className="inline-block cursor-pointer hover:opacity-80"
      >
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={30}
          height={30}
          className=""
        />
      </Link>

      <div className="flex items-center w-full justify-evenly absolute left-0 right-0 mx-auto lg:top-20">
        <ul className="flex space-x-4 lg:flex-col lg:justify-center lg:justify-items-center lg:space-x-0 lg:space-y-6">
          <li>
            <Link href="/">
              <HomeIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/movies"}>
              <MoviesIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/tvseries"}>
              <TvIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/bookmarks"}>
              <BookmarkIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
        </ul>
      </div>

      <Image
        src={"/assets/image-avatar.png"}
        alt="avatar"
        width={30}
        height={30}
        className="border-2 border-white rounded-full"
      />
    </nav>
  );
}
