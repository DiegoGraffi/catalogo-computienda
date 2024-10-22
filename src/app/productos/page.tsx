"use client";
import { Suspense, useEffect, useState } from "react";
import RecommendedProducts from "../sections/ProductsSections/Products";
import Products from "../sections/ProductsSections/Products";
import { useRouter, useSearchParams } from "next/navigation";

export const fetchCache = "force-no-store";

export interface Product {
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

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const router = useRouter();
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [productsPerPage, setProductsPerPage] = useState(
    Number(searchParams.productsPerPage) || 24
  );

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

  const page = searchParams.page || 1;
  const start = (+page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const products = data.slice(start, end);
  const totalPages = Math.ceil(data.length / productsPerPage);

  const handleProductsPerPageChange = (value: number) => {
    setProductsPerPage(value);
    router.push(`?page=${page}&productsPerPage=${value}`);
  };

  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Products
          products={products}
          totalPages={totalPages}
          loading={loading}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          productsPerPage={productsPerPage}
          setProductsPerPage={handleProductsPerPageChange}
        />
      </Suspense>
    </div>
  );
}
