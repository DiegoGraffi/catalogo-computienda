"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
  currentPage: number;
  perPage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
  currentPage,
  perPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  return (
    <div className="flex gap-2 justify-center items-center">
      <button
        className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(
            `/productos?${createQueryString(
              "page",
              (currentPage - 1).toString()
            )}`
          );
        }}
      >
        Anterior
      </button>

      <div>
        Página {currentPage} de {totalPages}
      </div>

      <button
        className="bg-blue-500 text-white p-2 rounded disabled:bg-gray-300"
        disabled={!hasNextPage}
        onClick={() => {
          router.push(
            `/productos?${createQueryString(
              "page",
              (currentPage + 1).toString()
            )}`
          );
        }}
      >
        Siguiente
      </button>
    </div>
  );
};

export default PaginationControls;
