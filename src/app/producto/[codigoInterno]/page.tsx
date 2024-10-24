import Image from "next/image";
import { db } from "@/db";
import { productos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/assets/images/logoSmall.png";
import { CreditCard, MessageCircleIcon, Truck } from "lucide-react";

export default async function Producto({
  params,
}: {
  params: { codigoInterno: string };
}) {
  const products = await db
    .select()
    .from(productos)
    .where(eq(productos.codigoInterno, params.codigoInterno))
    .limit(1);

  const product = products[0];

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const whatsappNumber = "2644164797";
  const whatsappMessage = `Hola Computienda! Quiero consultar por el producto "${product.nombre}"`;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8 flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-md">
                <Image
                  src={product.imagenes || Logo}
                  alt="Imagen del producto"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-10">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-base">
                    {product.rubro}
                  </Badge>
                  <Badge variant="secondary" className="text-base">
                    {product.subRubro}
                  </Badge>
                </div>
              </div>
              <h1 className="mt-5 text-2xl font-bold text-gray-900 sm:text-5xl">
                {product.nombre}
              </h1>
              <p className="mt-3 text-xl text-gray-500">{product.marca}</p>
              <div className="mt-5">
                <p className="text-4xl font-bold text-gray-900">$999.99</p>
                <h2 className="text-2xl mt-6 font-semibold text-gray-900">
                  Descripción del producto
                </h2>
                <p className="mt-3 text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="mt-5">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-7 w-7 text-gray-400" />
                  <p className="ml-4 text-lg text-gray-600">
                    Aceptamos todos los medios de pago
                  </p>
                </div>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full text-lg gap-3 py-6 bg-green-600 hover:bg-green-700">
                    Consultar por WhatsApp
                    <MessageCircleIcon className="h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
