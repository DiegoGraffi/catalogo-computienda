"use client";
import { useEffect, useState } from "react";
import ProductCard from "../generalComponents/ProductCard";

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

export default function ProductGrid() {
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

  const productos = data;

  return (
    <div className="w-full h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 row-auto gap-3">
      {productos && productos.length > 0
        ? productos.map((prod, i) => {
            return (
              <div className="w-full h-full min-h-[150px] flex justify-center items-center">
                <ProductCard
                  codigoInterno={prod.codigoInterno}
                  name={prod.nombre}
                  imagen={prod.imagenes}
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
