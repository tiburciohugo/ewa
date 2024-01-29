import { BookmarkIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { promises as fs } from "fs";
import BookmarkButton from "./ui/bookmarkbutton";

// {
//     "title": "Beyond Earth",
//     "thumbnail": {
//       "trending": {
//         "small": "./assets/thumbnails/beyond-earth/trending/small.jpg",
//         "large": "./assets/thumbnails/beyond-earth/trending/large.jpg"
//       },
//       "regular": {
//         "small": "./assets/thumbnails/beyond-earth/regular/small.jpg",
//         "medium": "./assets/thumbnails/beyond-earth/regular/medium.jpg",
//         "large": "./assets/thumbnails/beyond-earth/regular/large.jpg"
//       }
//     },
//     "year": 2019,
//     "category": "Movie",
//     "rating": "PG",
//     "isBookmarked": false,
//     "isTrending": true
//   }
// generate a interface for the movie object
interface Movie {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export default async function Trending() {
  const file = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
  const data: Movie[] = JSON.parse(file);

  const movies: Movie[] = data.filter((movie) => movie.category === "Movie");

  return (
    <section className="w-full px-4 py-6 text-white md:px-6 lg:pl-32 md:max-w-screen-md">
      <h1 className="text-xl tracking-wider">Trending</h1>

      <div className="scroll scrollbar-hide mt-4 flex h-full w-full items-center gap-4 overflow-x-scroll scroll-smooth whitespace-nowrap pb-4">
        {movies?.map((movie: Movie) => (
          <div key={movie.title} className="relative space-x-2">
            <BookmarkButton />
            <h2 className="absolute bottom-0 left-4 pb-2 pl-2 text-sm font-bold md:text-2xl md:font-light">
              {movie.title}
            </h2>
            <Image
              className="max-w-[29.375rem] cursor-pointer rounded-xl object-cover transition duration-300 ease-in-out hover:scale-105 md:w-[470px] md:h-[230px]"
              src={`/${movie.thumbnail.regular.large}`}
              alt={movie.title}
              width={240}
              height={140}
            ></Image>
          </div>
        ))}
      </div>
    </section>
  );
}
