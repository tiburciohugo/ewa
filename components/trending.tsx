import Image from "next/image";
import { promises as fs } from "fs";
import BookmarkButton from "./ui/bookmarkbutton";
import { Movie } from "@/app/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default async function Trending() {
  const file = await fs.readFile(process.cwd() + "/data/data.json", "utf8");
  const data: Movie[] = JSON.parse(file);

  const movies: Movie[] = data.filter((movie) => movie.isTrending === true);

  return (
    <section className="w-screen px-4 py-6 text-white md:max-w-screen-md md:px-6 lg:pl-36">
      <h1 className="text-xl tracking-wider">Trending</h1>

      <Carousel>
        <CarouselContent className="-space-x-[23%] md:-space-x-[30%] lg:-space-x-[15%]">
          {movies?.map((movie: Movie) => (
            <CarouselItem key={movie.title}>
              <div className="relative mt-4 flex">
                <BookmarkButton className="left-[57%]" />
                <h2 className="absolute bottom-0 left-4 pb-2 pl-2 text-sm font-bold md:text-2xl md:font-light">
                  {movie.title}
                </h2>
                <Image
                  className="max-w-[470px] cursor-pointer rounded-xl object-cover transition duration-300 ease-in-out hover:scale-105 md:h-[230px] md:w-[470px]"
                  src={`/${movie.thumbnail.regular.large}`}
                  alt={movie.title}
                  width={240}
                  height={140}
                ></Image>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </section>
  );
}
