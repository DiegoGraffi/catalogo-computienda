import React from "react";
import GallerySection from "@/components/nosotrosComponents/GallerySection";

export default function Nosotros() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div>
        <div>
          <video preload="metadata" width="320" height="240"></video>
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center">
        <h3 className="font-poppins text-[48px]/[58px] text-azulOscuro2">
          <b>SOBRE</b> NOSOTROS
        </h3>
        <div className="font-poppins text-center flex justify-center items-center mx-auto w-[60%] text-[16px]/[24px]">
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
    </div>
  );
}
