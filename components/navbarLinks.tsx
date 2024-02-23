"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import HomeIcon from "../public/icon-nav-home.svg";
import MoviesIcon from "../public/icon-nav-movies.svg";
import TvIcon from "../public/icon-nav-tv-series.svg";
import BookmarkIcon from "../public/icon-nav-bookmark.svg";

export default function NavbarLinks() {
  const pathname = usePathname();

  return (
    <div className="absolute left-0 right-0 mx-auto flex w-full items-center justify-evenly lg:top-20">
      <ul className="flex space-x-4 lg:flex-col lg:justify-center lg:justify-items-center lg:space-x-0 lg:space-y-6">
        <li>
          <Link href="/">
            <HomeIcon
              className={
                pathname === "/"
                  ? "text-white"
                  : "text-steel-blue transition delay-200 ease-in-out hover:text-white focus:text-white active:text-white"
              }
            />
          </Link>
        </li>
        <li>
          <Link href={"/movies"}>
            <MoviesIcon
              className={
                pathname === "/movies"
                  ? "text-white"
                  : "text-steel-blue transition delay-200 ease-in-out hover:text-white active:text-white"
              }
            />
          </Link>
        </li>
        <li>
          <Link href={"/tvseries"}>
            <TvIcon
              className={
                pathname === "/tvseries"
                  ? "text-white"
                  : "text-steel-blue transition delay-200 ease-in-out hover:text-white active:text-white"
              }
            />
          </Link>
        </li>
        <li>
          <Link href={"/bookmarks"}>
            <BookmarkIcon
              className={
                pathname === "/bookmarks"
                  ? "text-white"
                  : "text-steel-blue transition delay-200 ease-in-out hover:text-white active:text-white"
              }
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
