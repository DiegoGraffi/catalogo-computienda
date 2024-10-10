import Image from "next/image";
import Product from "@/assets/imagenProducto.png";
import { db } from "@/db";
import { productos } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <div className="min-h-screen w-screen flex justify-center items-center p-4 relative mx-auto mt-4">
      <div className="mx-auto p-4 flex flex-col md:flex-row gap-8 justify-center items-center h-full border w-full rounded-lg z-50 bg-white">
        <div className="flex-1 w-[100] h-full">
          <Image
            src={Product}
            alt="Imagen del producto"
            width={400}
            height={400}
            className="w-full h-auto rounded-lg border"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-2">
            <Badge variant="secondary">{product.rubro}</Badge>
            <Badge variant="secondary">{product.subRubro}</Badge>
          </div>
          <h1 className="text-3xl font-bold font-poppins">{product.nombre}</h1>
          <p className="text-sm text-muted-foreground">{product.marca}</p>
          <p className="text-2xl font-semibold">$999.99</p>
          <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full mt-4">Consultar por WhatsApp</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
