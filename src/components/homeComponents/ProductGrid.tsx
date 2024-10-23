"use client";
import { useEffect, useState } from "react";
import ProductCard from "../generalComponents/ProductCard";
import Image from "next/image";
import LogoSmall from "@/assets/images/logoSmall.png";
import PaginationControls from "./PaginationControls";
import { Product } from "@/app/productos/page";

interface ProductGridType {
  products: Product[];
  loading: any;
}

export default function ProductGrid({ products, loading }: ProductGridType) {
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
      {products && products.length > 0
        ? products.map((prod, i) => {
            return (
              <div
                key={i}
                className="w-full h-full min-h-[150px] flex justify-stretch items-center"
              >
                <ProductCard
                  codigoInterno={prod.codigoInterno}
                  name={prod.nombre}
                  imagen={prod.imagenes}
                  marca={prod.marca}
                  price={100}
                />
              </div>
            );
          })
        : null}
      {/* <PaginationControls
        hasNextPage={end < filteredProducts.length}
        hasPrevPage={start > 0}
      /> */}
    </div>
  );
}
