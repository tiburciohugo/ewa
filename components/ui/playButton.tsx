import React from "react";
import PlayIcon from "../../public/icon-play.svg";

type Props = {
    className?: string;
    top?: string;
    left?: string;
    };

export default function PlayButton({className, top, left}: Props ) {
  return (
    <button
      type="button"
      className={`absolute z-40 hidden cursor-pointer items-center gap-4 rounded-full bg-white bg-opacity-20 px-3 py-2 lg:left-[${left}] lg:top-[${top}] lg:group-hover:flex ${className}`}
    >
      <PlayIcon />
      <p className="font-medium text-white">Play</p>
    </button>
  );
}
