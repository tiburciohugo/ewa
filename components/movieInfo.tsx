import { Movie } from "@/app/types/types";
import MoviesIcon from "@/public/icon-category-movie.svg";
import TvIcon from "@/public/icon-category-tv.svg";

type MovieInfoProps = {
  movie: Movie;
  className?: string;
};

export default function MovieInfo({ movie, className }: MovieInfoProps) {
  return (
    <div className={`mt-2 flex items-center text-gray-400 ${className}`}>
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
  );
}
