"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
};

export default function PaginationControls({ totalPages }: Props) {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;

  const start = Math.max(1, +page - 2);
  const end = Math.min(totalPages, +page + 2);
  console.log("PAGINA", page);

  return (
    <section>
      <Pagination>
        <PaginationContent>
          {+page > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href={`/productos/?page=${+page > 1 ? +page - 1 : +page}`}
                rel="prev"
                className="bg-white border rouded-[6px] border-azulOrg hover:bg-azulPastel"
              />
            </PaginationItem>
          )}

          {start > 1 && (
            <PaginationItem>
              <PaginationLink
                href={`/productos/?page=1`}
                className="font-poppins font-[400] text-[12px]/[16px] text-grisClaro"
              >
                1
              </PaginationLink>
            </PaginationItem>
          )}
          {start > 2 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(
            (p) => (
              <PaginationItem key={p} className="">
                <PaginationLink
                  href={`/productos/?page=${p}`}
                  className={`font-poppins font-[400]  rounded-none ${
                    p === +page
                      ? "text-azulOrg bg-azulPastel text-[18px]/[24px]"
                      : "text-[12px]/[16px] text-grisClaro"
                  }`}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          {end < totalPages - 1 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {end < totalPages && (
            <PaginationItem>
              <PaginationLink
                href={`/productos/?page=${totalPages}`}
                className="font-poppins font-[400] text-[12px]/[16px] text-grisClaro"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}
          {+page < totalPages && (
            <PaginationItem>
              <PaginationNext
                href={`/productos/?page=${
                  +page < totalPages ? +page + 1 : +page
                }`}
                rel="next"
                className="bg-white border rouded-[6px] border-azulOrg hover:bg-azulPastel"
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </section>
  );
}
