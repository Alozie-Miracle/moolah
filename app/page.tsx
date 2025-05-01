import AutoScroll from "@/components/autoScroll";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import SearchGroup from "@/components/searchGroup";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col gap-5">
      <Navbar />
      <SearchGroup />
      <AutoScroll />
      <Footer />
    </div>
  );
}
