import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { SearchIcon, UserIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center w-[100vw] min-h-[10vh] px-[30px] py-[10px]">
      <div className="max-w-[1600px] h-full w-full items-center justify-between flex">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={200} />
        </Link>

        <div className="flex flex-col gap-3">
          {/* <div className="flex border rounded-full px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <input
              type="text"
              className="w-full ml-2 rounded-r-full border-l px-2 focus:outline-none"
            />
          </div> */}
          <ul className="flex justify-between gap-10 ">
            <li className="font-poppins text-grisOrg hover:text-azulOrg hover:underline transition-all ease-in-out duration-200 cursor-pointer">
              Inicio
            </li>
            <li className="font-poppins text-grisOrg hover:text-azulOrg hover:underline transition-all ease-in-out duration-200 cursor-pointer">
              Productos
            </li>
            <li className="font-poppins text-grisOrg hover:text-azulOrg hover:underline transition-all ease-in-out duration-200 cursor-pointer">
              Nosotros
            </li>
            <li className="font-poppins text-grisOrg hover:text-azulOrg hover:underline transition-all ease-in-out duration-200 cursor-pointer">
              Empresas
            </li>
          </ul>
        </div>

        {/* <div className="flex gap-5 justify-end">
          <Image src={CartIcon} alt="Cart icon" width={20} height={20} />
          <Image
            src={LanguageIcon}
            alt="Language icon"
            width={20}
            height={20}
          />
          <Image src={UserIcon} alt="user icon" width={20} height={20} />
        </div> */}
      </div>
    </div>
  );
}
