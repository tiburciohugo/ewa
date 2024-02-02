import { Movie } from "@/app/types/types";
import React from "react";
import BookmarkButton from "./ui/bookmarkbutton";
import Image from "next/image";
import MovieInfo from "./movieInfo";

export default async function Recommended() {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseURL}/api/movies`);
  const data: Movie[] = await response.json();

  return (
    <section className="lg:max-w-xxl w-full px-4 py-6 text-white md:max-w-screen-md md:px-6 lg:pl-36">
      <h1 className="text-xl tracking-wider">Recommended for you</h1>

      <div className="grid w-full max-w-[1440px] grid-cols-2 gap-1 md:grid-cols-3 md:gap-4 lg:w-screen lg:grid-cols-4">
        {data?.map((movie: Movie) => (
          <div key={movie.title} className="relative mt-4 w-full max-w-[280px]">
            <BookmarkButton
              movie={movie}
              className="left-[75%] md:left-[80%]"
            />
            <Image
              className="min-h-[110px] w-full min-w-[140px] max-w-[280px] cursor-pointer rounded-xl object-cover transition duration-300 ease-in-out hover:scale-105"
              src={`/${movie.thumbnail.regular.large}`}
              alt={movie.title}
              width={160}
              height={110}
            ></Image>

            <MovieInfo movie={movie} />

            <h2 className="text-sm font-bold md:text-2xl md:font-light">
              {movie.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
