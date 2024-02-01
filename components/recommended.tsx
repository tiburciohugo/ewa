import { promises as fs } from "fs";
import { Movie } from "@/app/types/types";
import React from "react";
import BookmarkButton from "./ui/bookmarkbutton";
import Image from "next/image";
import MoviesIcon from "../public/icon-nav-movies.svg";
import TvIcon from "../public/icon-nav-tv-series.svg";

export default async function Recommended() {
  const file = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
  const data: Movie[] = JSON.parse(file);

  return (
    <section className="lg:max-w-xxl w-full px-4 py-6 text-white md:max-w-screen-md md:px-6 lg:pl-36">
      <h1 className="text-xl tracking-wider">Recommended for you</h1>

      <div className="grid w-full max-w-[1440px] grid-cols-2 md:grid-cols-3 md:gap-4 lg:w-screen lg:grid-cols-4 gap-1">
        {data?.map((movie: Movie) => (
          <div key={movie.title} className="relative mt-4 w-full max-w-[280px]">
            <BookmarkButton className="left-[75%] md:left-[80%]" />
            <Image
              className="min-h-[110px] w-full min-w-[140px] max-w-[280px] cursor-pointer rounded-xl object-cover transition duration-300 ease-in-out hover:scale-105"
              src={`/${movie.thumbnail.regular.large}`}
              alt={movie.title}
              width={160}
              height={110}
            ></Image>

            <div className="mt-2 flex items-center text-gray-400">
              <p>{movie.year}</p>
              <p className="2sm:mx-2 mx-1">•</p>
              {movie.category === "Movie" ? (
                <MoviesIcon className="2sm:mr-2 mr-1" />
              ) : (
                <TvIcon className="2sm:mr-2 mr-1" />
              )}
              <p>{movie.category}</p>
              <p className="2sm:mx-2 mx-1">•</p>
              <p>{movie.rating}</p>
            </div>

            <h2 className="text-sm font-bold md:text-2xl md:font-light">
              {movie.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
