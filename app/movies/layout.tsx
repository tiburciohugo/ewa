import Searchbar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function MovieLayout({
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
