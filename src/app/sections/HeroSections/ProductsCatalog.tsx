import FiltersSection from "@/components/homeComponents/FiltersSection";
import ProductGrid from "@/components/homeComponents/ProductGrid";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.svg";
import { X } from "lucide-react";

export default function ProductsCatalog() {
  return (
    <div className="w-full max-w-[1600px] flex flex-col gap-5 mx-auto p-4">
      <div className="flex border max-w-[500px] rounded-full px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <Image src={SearchIcon} alt="Search Icon" width={20} />
        <input
          type="text"
          className="w-full ml-2 rounded-r-full border-l px-2 focus:outline-none"
          placeholder="Buscar productos"
        />
        <X color="#4D5461" strokeWidth={1} />
      </div>

      <div className="w-full flex gap-5">
        <div className="rounded-md basis-1/6 p-4">
          <FiltersSection />
        </div>

        <div className="rounded-md basis-5/6 p-4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
