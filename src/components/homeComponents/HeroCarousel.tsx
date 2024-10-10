"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Banner from "@/assets/HeroBanner.png";
import Banner2 from "@/assets/HeroBanner2.jpg";
import Banner3 from "@/assets/HeroBanner3.jpg";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      opts={{
        loop: true,
        watchResize: true,
      }}
      className="border h-[65vh] w-screen relative"
    >
      <CarouselContent className="h-[65vh]">
        <CarouselItem className="h-full relative">
          <Image src={Banner} alt="Banner" fill className="object-cover" />
        </CarouselItem>
        <CarouselItem className="h-full relative">
          <Image src={Banner2} alt="Banner2" fill className="object-cover" />
        </CarouselItem>
        <CarouselItem className="h-full relative">
          <Image src={Banner3} alt="Banner3" fill className="object-cover" />
        </CarouselItem>
      </CarouselContent>
      <div className="absolute top-0 w-screen h-full flex ">
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-10" />
      </div>
    </Carousel>
  );
}
