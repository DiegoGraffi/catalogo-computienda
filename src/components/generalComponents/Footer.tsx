import Image from "next/image";
import LogoBlanco from "@/assets/images/LogoBlanco.png";
import CodigoQr from "@/assets/images/qr.png";
import {
  Linkedin,
  Facebook,
  Instagram,
  Phone,
  Mail,
  Music2,
  MapPin,
  Clock2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-azulMuyOscuro to-azulOrg">
      <div className="flex flex-row justify-around gap-10 items-start w-[100vw] min-h-[10vh] py-11">
        <div className="flex flex-col gap-10 ">
          <div>
            <Image src={LogoBlanco} width={350} height={64} alt="logo" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="font-semibold text-[18px]/[22px] text-grisPastel">
              Seguinos en:
            </p>
            <div className="flex flex-row gap-4 ">
              <Instagram color="white" />
              <Music2 color="white" />
              <Facebook color="white" />
              <Linkedin color="white" />
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3">
            <h2 className="text-grisPastel font-semibold text-[18px]/[22px]">
              Categorias destacadas
            </h2>
            <ul className="text-grisPastel text-[16px]/[24px] flex flex-col gap-1">
              <li>Noteboks</li>
              <li>Sillas Gamer</li>
              <li>Electrodomésticos</li>
              <li>Auriculares</li>
              <li>Parlantes</li>
              <li>Teclados</li>
              <li>Escritorios</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-grisPastel font-semibold text-[18px]/[22px]">
            Contacto
          </h2>
          <ul className="text-grisPastel text-[16px]/[24px] flex flex-col gap-4">
            <li className="flex gap-2">
              <Phone />
              {"+54 264 1234 765"}
            </li>
            <li className="flex gap-2">
              <Mail />
              {"contacto@computienda.com.ar"}
            </li>
            <li className="flex gap-2">
              <MapPin />
              {"contacto@computienda.com.ar"}
            </li>
            <li className="flex gap-2">
              <Clock2 />
              {"Lun. a Vie. 09:00-13:00 | 17:00-21:00 Sáb. 10:00-14:00"}
            </li>

            <Image src={CodigoQr} alt="QR" />
          </ul>
        </div>
      </div>
      <div className="flex flex-row bg-grisMuyOscuro gap-3 h-[50px] justify-center items-center">
        <p className="text-grisClaro text-[16px]/[24px] ">
          Preguntas Frecuentes
        </p>
        <p className="text-grisClaro text-[16px]/[24px] ">|</p>
        <p className="text-grisClaro text-[16px]/[24px] ">Sobre Nosotros</p>
        <p className="text-grisClaro text-[16px]/[24px] ">|</p>
        <p className="text-grisClaro text-[16px]/[24px] ">
          Términos y Condiciones
        </p>
      </div>
    </footer>
  );
}
