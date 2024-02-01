import Image from "next/image";
import { promises as fs } from "fs";
import { Movie } from "@/app/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BookmarkButton from "./ui/bookmarkbutton";

export default async function Trending() {
  const file = await fs.readFile(process.cwd() + "/../ewa/data/data.json", "utf8");
  const data: Movie[] = JSON.parse(file);

  const movies: Movie[] = data.filter((movie) => movie.isTrending === true);

  return (
    <section className="px-4 py-6 text-white md:max-w-lg md:px-6 lg:pl-36">
      <h1 className="text-xl tracking-wider">Trending</h1>

      <Carousel className=" sm:w-[380px] max-w-screen-2xl md:w-[710px] lg:w-[1000px] xl:w-[1440px]">
        <CarouselContent className="lg:gap-6">
          {movies?.map((movie: Movie) => (
            <CarouselItem key={movie.title}>
              <div className="relative mt-4 flex w-[240px] max-w-[470px] rounded-xl md:w-[470px]">
                <BookmarkButton className="left-[85%]" />
                <h2 className="absolute bottom-0 left-4 pb-2 pl-2 text-sm font-bold md:text-2xl md:font-light">
                  {movie.title}
                </h2>
                <Image
                  className="cursor-pointer rounded-xl object-cover transition duration-300 ease-in-out hover:scale-105 md:h-[230px] md:w-[470px]"
                  src={`/${movie.thumbnail.regular.large}`}
                  alt={movie.title}
                  width={240}
                  height={140}
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
