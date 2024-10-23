"use client";
import { useState } from "react";
import Image from "next/image";
import { ScrollContainer } from "@/components/generalComponents/ScrollContainer";
import FsLightbox from "fslightbox-react";

type PhotoListProps = { photos: string[] };

export default function LightBox({ photos }: PhotoListProps) {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });
  const firstRow = photos.slice(0, Math.ceil(photos.length / 2));
  const secondRow = photos.slice(Math.ceil(photos.length / 2));

  function openLightboxOnSlide(index: number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index + 1,
    });
  }

  return (
    <div className="w-full h-auto">
      <div className="flex max-w-[1600px] mx-auto relative h-auto">
        <div className="h-full hidden lg:flex w-[150px]  absolute z-50 touch-disabled left-0"></div>
        <div className="h-full hidden lg:flex w-[150px]  to-transparent absolute top-0 right-0 z-50 touch-disabled"></div>
        <ScrollContainer className="w-full overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing">
          <div className="w-max flex flex-col gap-[10px]">
            <div className="flex gap-[10px] w-full">
              {firstRow.map((photo, index) => (
                <div
                  key={index}
                  className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                  onClick={() => openLightboxOnSlide(index)}
                >
                  <Image
                    src={photo}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-all ease-in-out duration-200 pointer-events-none"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-[10px]">
              {secondRow.map((photo, index) => {
                const adjustedIndex = index + firstRow.length;
                return (
                  <div
                    key={index}
                    className="w-[200px] h-[200px] relative grid grid-rows-2 overflow-hidden"
                    onClick={() => openLightboxOnSlide(adjustedIndex)}
                  >
                    <Image
                      src={photo}
                      alt={`Gallery image ${adjustedIndex + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-all ease-in-out duration-200 pointer-events-none"
                      draggable="false"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollContainer>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={photos}
        slide={lightboxController.slide}
      />
    </div>
  );
}
