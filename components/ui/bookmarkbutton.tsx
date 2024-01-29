"use client";
import { BookmarkIcon } from "lucide-react";
import React from "react";

export default function BookmarkButton() {
  return (
    <div className="hover:bg-opacity absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black bg-opacity-30 p-2 text-white hover:bg-white hover:text-black md:right-6">
      <button id="btn" className="" onClick={() => {}}>
        <BookmarkIcon className="h-6 w-5 cursor-pointer" />
      </button>
    </div>
  );
}
