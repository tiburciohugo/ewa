import Recommended from "@/components/recommended";
import Searchbar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";
import Trending from "@/components/trending";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  // const session = await getServerSession();

  // if (session) {
  //   console.log("home session", session);
  // }
  // // if user not logged in redirect to login page
  // if (!session?.user) {
  //   redirect("/login");
  // }
  return (
    <section className="flex flex-col">
      <Sidebar />
      <Searchbar />
      <Trending />
      <Recommended />
    </section>
  );
}
