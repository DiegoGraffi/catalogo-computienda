import imageProduct from "@/assets/imagenProducto.png";
import Image from "next/image";
import Link from "next/link";
import LogoSmall from "@/assets/logoSmall.png";

export default function rodeProductCard({
  name,
  price,
  codigoInterno,
  imagen,
}: {
  name: string;
  price: number;
  codigoInterno: string;
  imagen: string;
}) {
  return (
    <div className="relative group border hover:border-[#00AFEF] transition-all ease-in-out duration-200">
      <Link
        href={`/producto/${encodeURIComponent(codigoInterno)}`}
        className="shadow-[0px_0px_5px_rgba(0,0,0,0.2)]"
      >
        <div className="w-full h-full relative">
          <div className="w-full mx-auto aspect-square relative overflow-hidden">
            <Image
              src={imagen !== null ? imagen : LogoSmall}
              fill
              className="object-contain group-hover:scale-105 transition-all ease-in-out duration-200 p-4"
              alt="imagen producto"
            />
            <div className="absolute top-0 right-0 bg-[#00AFEF] flex py-2 px-3 justify-center items-center">
              <p className="text-white font-bold text-center uppercase text-sm">
                Nuevo
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F9FAFB] flex flex-col justify-center items-center px-5 py-8 gap-4">
          <div className="h-[3rem] flex items-center overflow-hidden">
            <p
              className="text-lg text-center text-[#4D5461] font-bold group-hover:text-[#00AFEF] transition-all ease-in-out duration-200
              line-clamp-2 overflow-hidden text-ellipsis"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {name}
            </p>
          </div>
          <p className="text-2xl text-center text-[#4D5461] font-bold">
            ${price}
          </p>
        </div>

        <div className="flex justify-center items-center bg-[#6D717F] group-hover:bg-[#00AFEF] transition-all ease-in-out duration-200 cursor-pointer">
          <p className="font-semibold text-sm text-white text-center p-3">
            Consultar Producto
          </p>
        </div>
      </Link>
    </div>
  );
}
