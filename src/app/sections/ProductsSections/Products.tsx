"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FiltersSection from "@/components/homeComponents/FiltersSection";
import ProductGrid from "@/components/homeComponents/ProductGrid";
import SearchIcon from "@/assets/icons/search.svg";
import PaginationControls from "@/components/homeComponents/PaginationControls";

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

export default function Products({
  products,
  loading,
  totalPages,
  searchTerm,
  setSearchTerm,
  productsPerPage,
  setProductsPerPage,
}: {
  products: Product[];
  loading: any;
  totalPages: number;
  searchTerm: string;
  setSearchTerm: any;
  productsPerPage: number;
  setProductsPerPage: any;
}) {
  const filteredProducts = useMemo(() => {
    const searchWords = searchTerm.toLowerCase().split(" ").filter(Boolean);

    return products.filter((product) => {
      const codigoInternoMatch = product.codigoInterno
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const codigoBarraMatch = product.codigoBarra
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const nombreMatch = searchWords.every((word) =>
        product.nombre.toLowerCase().includes(word)
      );

      const marcaMatch = product.marca
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());

      const subRubroMatch = product.subRubro
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase());
      return (
        codigoInternoMatch ||
        codigoBarraMatch ||
        nombreMatch ||
        marcaMatch ||
        subRubroMatch
      );
    });
  }, [products, searchTerm]);

  return (
    <div className="w-full max-w-[1600px] flex flex-col gap-5 mx-auto p-4">
      <div className="w-full justify-between flex items-center p-4">
        <div className="flex border max-w-[500px] rounded-full px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <Image src={SearchIcon} alt="Search Icon" width={20} height={20} />
          <input
            type="text"
            className="w-full ml-2 rounded-r-full border-l px-2 focus:outline-none"
            placeholder="Buscar productos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <X color="#4D5461" strokeWidth={1} />
        </div>

        <div className="flex gap-3 items-center font-poppins text-azulClaro">
          <Label>Items por página</Label>
          <Select
            value={productsPerPage.toString()}
            onValueChange={(value) => setProductsPerPage(Number(value))}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="36">36</SelectItem>
              <SelectItem value="48">48</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full flex gap-5">
        <div className="rounded-md basis-1/6 p-4">
          <FiltersSection />
        </div>

        <div className="rounded-md basis-5/6 p-4 flex flex-col gap-5">
          <ProductGrid products={products} loading={loading} />
          <PaginationControls totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
