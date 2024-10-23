import HomeProductsCarousel from "@/components/homeComponents/HomeProductsCarousel";
import Hero from "./sections/HomeSections/Hero";

export const fetchCache = "force-no-store";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Hero />
      <HomeProductsCarousel />
    </div>
  );
}
