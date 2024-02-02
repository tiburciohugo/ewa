"use client";
import { Movie } from "@/app/types/types";
import BookmarkIconEmpty from "@/public/icon-bookmark-empty.svg";
import BookmarkIconFull from "@/public/icon-bookmark-full.svg";
import React from "react";

interface BookmarkButtonProps {
  movie: Movie;
  className?: string;
}

export default function BookmarkButton({
  movie,
  className,
}: BookmarkButtonProps) {
  const movieBookmark = movie.isBookmarked;

  const background = movieBookmark ? (
    <BookmarkIconFull />
  ) : (
    <BookmarkIconEmpty />
  );

  return (
    <div
      className={`hover:bg-opacity absolute top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-30 p-2 text-white hover:bg-white hover:text-black md:right-6  ${className}`}
    >
      <button
        id="btn"
        className={`${background}`}
        onClick={() => {
          movie.isBookmarked = !movie.isBookmarked;
          localStorage.setItem("movies", JSON.stringify(movie));
        }}
      >
        {background}
      </button>
    </div>
  );
}
