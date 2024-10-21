"use client";
import FiltersSection from "@/components/homeComponents/FiltersSection";
import ProductGrid from "@/components/homeComponents/ProductGrid";
import Image from "next/image";
import SearchIcon from "@/assets/icons/search.svg";
import { X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function ProductsCatalog({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "5";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

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

  const products = data;

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
          <Image src={SearchIcon} alt="Search Icon" width={20} />
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
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="24">24</SelectItem>
              <SelectItem value="36">36</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="w-full flex gap-5">
        <div className="rounded-md basis-1/6 p-4">
          <FiltersSection />
        </div>

        <div className="rounded-md basis-5/6 p-4">
          <ProductGrid filteredProducts={filteredProducts} loading={loading} />
        </div>
      </div>
    </div>
  );
}
