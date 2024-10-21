"use client";
import { useEffect, useState } from "react";
import ProductCard from "../generalComponents/ProductCard";
import Image from "next/image";
import LogoSmall from "@/assets/logoSmall.png";

interface Product {
  id: number;
  codigoInterno: string;
  codigoBarra: string | null;
  nombre: string;
  descripcion: string;
  marca: string;
  rubro: string;
  subRubro: string;
  imagenes: string;
  created_at: string;
}

interface ProductGridType {
  filteredProducts: Product[];
  loading: boolean;
}

export default function ProductGrid({
  filteredProducts,
  loading,
}: ProductGridType) {
  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <Image
          src={LogoSmall}
          alt="logo"
          width={100}
          height={100}
          className="animate-pulse"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 row-auto gap-3">
      {filteredProducts && filteredProducts.length > 0
        ? filteredProducts.map((prod, i) => {
            return (
              <div className="w-full h-full min-h-[150px] flex justify-stretch items-center">
                <ProductCard
                  codigoInterno={prod.codigoInterno}
                  name={prod.nombre}
                  imagen={prod.imagenes}
                  marca={prod.marca}
                  price={100}
                  key={i}
                />
              </div>
            );
          })
        : null}
    </div>
  );
}
