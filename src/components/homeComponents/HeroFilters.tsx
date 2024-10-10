import { Filters } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function HeroFilters() {
  return (
    <div className="w-screen ">
      <div className="group w-screen bg-orange-500 hover:bg-[#FF4D00] transition-all ease-in-out duration-150 flex justify-center items-center py-4">
        <p className="font-bold text-white uppercase italic">
          <span className="mr-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150">
            🔥
          </span>
          Nuestros Productos{" "}
          <span className="ml-3 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150">
            🔥
          </span>
        </p>
      </div>
      <div className="h-full w-full bg-[#F3F3F3]">
        <div className="h-full max-w-[1600px] items-center flex justify-evenly mx-auto gap-4 p-4">
          {Filters.map((filter, i) => {
            return (
              <div
                className="group flex flex-col gap-4 items-center border h-full w-full justify-center rounded-lg aspect-square"
                key={i}
              >
                <Image src={filter.image} alt={filter.label} width={70} />
                <Link
                  href={"#"}
                  className="font-semibold text-[#6D717F] group-hover:text-[#0965C8] transition-all ease-in-out duration-150 group-hover:underline"
                >
                  {filter.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
