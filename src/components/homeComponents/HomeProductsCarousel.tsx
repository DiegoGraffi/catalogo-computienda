"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../generalComponents/ProductCard";
import { useEffect, useState } from "react";

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

export default function HomeProductsCarousel() {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://computienda-nu.vercel.app/api/productos"
        );

        if (!response.ok) {
          throw new Error("Error en la carga de datos");
        }

        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  const recomendados = data.slice(0, 100);

  return (
    <div className="flex flex-col gap-5 py-5">
      <p className="text-[#4D5461] text-2xl font-bold text-center ">
        Productos recomendados
      </p>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-[1600px] relative mx-[100px]"
      >
        <CarouselContent>
          {recomendados && recomendados.length > 0 ? (
            recomendados.map((prod, i) => {
              return (
                <CarouselItem className="basis-1/4" key={i}>
                  <ProductCard
                    name={prod.nombre}
                    price={100}
                    codigoInterno={prod.codigoInterno}
                  />
                </CarouselItem>
              );
            })
          ) : (
            <p>No hay productos</p>
          )}
        </CarouselContent>
        <div className="border w-full h-full">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
