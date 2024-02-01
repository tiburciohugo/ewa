import Searchbar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function BookmarksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Sidebar />
      <Searchbar />
      {children}
    </section>
  );
}
