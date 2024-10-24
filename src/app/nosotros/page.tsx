"use client";
import React from "react";
import GallerySection from "@/components/nosotrosComponents/GallerySection";
import { CldVideoPlayer } from "next-cloudinary";

export default function Nosotros() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="w-full h-[620px] relative overflow-hidden">
        <div className="absolute inset-0">
          <CldVideoPlayer
            src="/portada-video_quf8dc"
            sourceTypes={["mp4", "webm"]}
            autoplay={true}
            loop={true}
            muted
            preload="auto"
            hideContextMenu
            className="object-bottom"
            controls={false}
            id="portada"
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h3 className="font-poppins text-[48px]/[58px] text-azulOrg">
          <b>SOBRE</b> NOSOTROS
        </h3>
        <div className="font-poppins text-center w-[50%] text-[16px]/[24px]">
          Somos una joven empresa dedicada a comercializar e integrar tecnología
          con el fin de brindar soluciones a diversas industrias y
          organizaciones privadas y públicas en diferentes puntos de la
          Provincia, así como también a clientes particulares. Nuestro objetivo
          es brindar un servicio profesional, no solo proveyendo productos de
          primera línea sino además procurando un asesoramiento personalizado,
          con una relación precio-calidad muy conveniente. Ofrecemos soluciones
          completas y de acuerdo a las necesidades de nuestros clientes
        </div>
      </div>
      <GallerySection />
      <div>Reseñas</div>
    </div>
  );
}
