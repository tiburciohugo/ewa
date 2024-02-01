import Recommended from "@/components/recommended";
import Searchbar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Trending from "@/components/trending";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col">
      <Sidebar />
      <Searchbar />
      <Trending />
      <Recommended />
    </section>
  );
}
