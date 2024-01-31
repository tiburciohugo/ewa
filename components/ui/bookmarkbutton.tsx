"use client";
import { BookmarkIcon } from "lucide-react";
import React from "react";

interface BookmarkButtonProps {
  className?: string;
}

export default function BookmarkButton({className}: BookmarkButtonProps) {
  return (
    <div
      className={`hover:bg-opacity absolute top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-30 p-2 text-white hover:bg-white hover:text-black md:right-6 lg:left-[70%] ${className}`}
    >
      <button id="btn" className="" onClick={() => {}}>
        <BookmarkIcon className="h-6 w-5 cursor-pointer" />
      </button>
    </div>
  );
}
