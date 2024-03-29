"use client";
import Image from "next/image";
import { useState } from "react";

export default function Searchbar() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="mt-20 flex items-center justify-between gap-4 bg-midnight-blue px-4 md:mt-28 md:px-6 lg:mt-6 lg:ml-28 max-w-lg">
      <Image
        src="/icon-search.svg"
        alt="search icon"
        width={24}
        height={24}
        className="lg:w-8 lg:h-8"
      />
      <input
        type="text"
        placeholder="Search for Movies or TV Series"
        className="w-full bg-midnight-blue py-4 text-lg font-light text-white placeholder-dark-gray focus:border-b-2 focus:border-slate-500 focus:outline-none lg:text-xl"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
