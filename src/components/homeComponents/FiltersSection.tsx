import { Checkbox } from "@/components/ui/checkbox";

interface listaFiltrosProps {
  listaFiltros: string[];
}

export default function FiltersSection({ listaFiltros }: listaFiltrosProps) {
  return (
    <div className="w-full flex flex-col">
      <p className="font-poppins text-azulOscuro font-[700] text-[28px]/[34px] mb-4">
        Filtros
      </p>
      {listaFiltros.map((filter, i) => {
        return (
          <div key={i} className="group flex gap-2 items-center mb-2">
            <Checkbox className="rounded-full border-gris" />
            <p className="font-poppins font-[400] text-[16px]/[20px] text-grisOrg hover:text-azulOrg hover:underline transition-all ease-in-out duration-200">
              {filter}
            </p>
          </div>
        );
      })}
    </div>
  );
}
