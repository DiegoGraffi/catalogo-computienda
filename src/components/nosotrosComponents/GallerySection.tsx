"use client";

import React from "react";

import FotoAtencion from "@/assets/images/gallery/FotoAtencion.jpg";
import FotoCougar from "@/assets/images/gallery/FotoCougar.jpg";
import FotoFrente from "@/assets/images/gallery/FotoFrente.jpg";
import FotoGabinetes from "@/assets/images/gallery/FotoGabinetes.jpg";
import FotoInterior from "@/assets/images/gallery/FotoInterior.jpg";
import FotoServicioTecnico from "@/assets/images/gallery/FotoServicioTecnico.jpg";
import FotoSillas from "@/assets/images/gallery/FotoSillas.jpg";
import FotoTeclados from "@/assets/images/gallery/FotoTeclados.jpg";
import LightBox from "./Lightbox";

const imagenes = [
  FotoAtencion.src,
  FotoCougar.src,
  FotoFrente.src,
  FotoGabinetes.src,
  FotoInterior.src,
  FotoServicioTecnico.src,
  FotoSillas.src,
  FotoTeclados.src,
  FotoSillas.src,
  FotoTeclados.src,
  FotoInterior.src,
  FotoServicioTecnico.src,
  FotoAtencion.src,
  FotoCougar.src,
  FotoFrente.src,
  FotoGabinetes.src,
  FotoAtencion.src,
  FotoCougar.src,
  FotoFrente.src,
  FotoGabinetes.src,
  FotoInterior.src,
  FotoServicioTecnico.src,
  FotoSillas.src,
  FotoTeclados.src,
  FotoSillas.src,
  FotoTeclados.src,
  FotoInterior.src,
  FotoServicioTecnico.src,
  FotoAtencion.src,
  FotoCougar.src,
  FotoFrente.src,
  FotoGabinetes.src,
  FotoAtencion.src,
  FotoCougar.src,
  FotoFrente.src,
  FotoGabinetes.src,
  FotoInterior.src,
  FotoServicioTecnico.src,
  FotoSillas.src,
  FotoTeclados.src,
  FotoSillas.src,
  FotoTeclados.src,
  FotoInterior.src,
  FotoServicioTecnico.src,
  FotoAtencion.src,
  FotoCougar.src,
  FotoFrente.src,
  FotoGabinetes.src,
];

export default function GallerySection() {
  return (
    <section className="py-[70px] w-full flex flex-col gap-5 justify-center lg:justify-start items-center overflow-hidden lg:px-[100px] px-[15px]">
      <div className="max-w-[1600px]  w-full flex justify-center lg:justify-between items-center mx-auto overflow-hidden ">
        <p className="font-poppins text-[48px]/[58px] text-azulOscuro2">
          <b>Nuestro</b> Local
        </p>
      </div>
      <LightBox photos={imagenes} />
      {/* <div className="flex flex-col gap-[10px] justify-center">
        <div className="flex items-center w-[80px] mx-auto">
          <Image src={mouseRojo} alt="mouse" className="animate-mouse-slider" />
        </div>
        <p className="font-bricolage text-terciarioPrincipal text-[14px]/[20px] text-center">
          Deslizar
        </p>
      </div> */}
    </section>
  );
}
