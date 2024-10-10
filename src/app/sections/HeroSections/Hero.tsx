import HeroCarousel from "@/components/homeComponents/HeroCarousel";
import HeroFilters from "@/components/homeComponents/HeroFilters";
import HomeProductsCarousel from "@/components/homeComponents/HomeProductsCarousel";

export default function Hero() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      <HeroCarousel />
      <HeroFilters />
      <HomeProductsCarousel />
    </div>
  );
}
