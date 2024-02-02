import RestaurantCard from "@/components/RestaurantCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@mantine/core";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto bg-white dark:bg-slate-400">
      <div className="h-56 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
          <SearchBar />
        </div>
      </div>

      <div className="py-3 px-16 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
    </div>
  );
}
