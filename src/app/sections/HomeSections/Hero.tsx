"use client";

import HeroCarousel from "@/components/homeComponents/HeroCarousel";
import HeroFilters from "@/components/homeComponents/HeroFilters";
import HomeProductsCarousel from "@/components/homeComponents/HomeProductsCarousel";
;
import { useSearchParams } from "next/navigation";

export default function Hero() {
  const searchParams = useSearchParams();

  return (
    <div className="min-h-screen w-screen flex flex-col ">
      <HeroCarousel />
      <HeroFilters />
      {/* <HomeProductsCarousel /> */}
    </div>
  );
}
