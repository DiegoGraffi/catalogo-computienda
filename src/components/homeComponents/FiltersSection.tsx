import { filters } from "@/utils/constants";

export default function FiltersSection() {
  return (
    <div className="w-full flex flex-col">
      <p className="font-poppins text-azulOscuro font-[700] text-[28px]/[34px] mb-4">
        Filtros
      </p>
      {filters.map((filter, i) => {
        return (
          <div key={i} className="flex gap-2 items-center mb-2">
            <div className="w-4 h-4 border rounded-full"></div>
            <p className="font-poppins font-[400] text-[16px]/[20px] text-grisOrg hover:text-azulOrg hover:underline transition-all ease-in-out duration-200">
              {filter}
            </p>
          </div>
        );
      })}
    </div>
  );
}
