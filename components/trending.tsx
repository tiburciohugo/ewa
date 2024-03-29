"use client";
import { Movie } from "@/app/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BookmarkButton from "./ui/bookmarkbutton";
import MovieInfo from "./movieInfo";
import { useEffect, useState } from "react";
import fetchMovies from "@/lib/fetchMovies";
import PlayButton from "./ui/playButton";

export default function Trending() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function loadMovies() {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    }

    loadMovies();
  }, []);

  const filteredMovies: Movie[] = movies.filter(
    (movie) => movie.isTrending === true,
  );

  return (
    <section className="px-4 py-6 text-white md:max-w-lg md:px-6 lg:pl-36">
      <h1 className="text-xl tracking-wider">Trending</h1>

      <Carousel className=" max-w-screen-2xl sm:w-[380px] md:w-[710px] lg:w-[1000px] xl:w-[1440px]">
        <CarouselContent className="lg:gap-6">
          {filteredMovies?.map((movie: Movie) => (
            <CarouselItem key={movie.title}>
              <div className="group relative mt-4 flex w-[240px] max-w-[470px] rounded-xl md:w-[470px]">
                <PlayButton top="30%" left="40%" />

                <div className="z-20">
                  <MovieInfo
                    movie={movie}
                    className="absolute bottom-[17%] left-[10%] text-gray-300 md:bottom-[17%] md:left-[5%]"
                  />

                  <BookmarkButton movie={movie} className="left-[85%]" />
                  <h2 className="absolute bottom-0 left-4 pb-2 pl-2 text-sm font-bold md:text-2xl md:font-light">
                    {movie.title}
                  </h2>
                </div>

                <img
                  className="cursor-pointer rounded-xl object-cover transition duration-300 ease-in-out group-hover:opacity-70 md:h-[230px] md:w-[470px]"
                  src={`${movie.thumbnail.trending.large.startsWith("/") ? "" : "."}${movie.thumbnail.trending.large}`}
                  alt={movie.title}
                  width={240}
                  height={140}
                ></img>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
