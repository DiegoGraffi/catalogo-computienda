import Image from "next/image";
import Logo from "@/assets/logo.png";
import CartIcon from "@/assets/icons/cart-alt.svg";
import LanguageIcon from "@/assets/icons/internet.svg";
import UserIcon from "@/assets/icons/user.svg";
import SearchIcon from "@/assets/icons/search.svg";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center w-[100vw] min-h-[10vh] px-[30px] py-[10px]">
      <div className="max-w-[1600px] h-full w-full grid grid-cols-3 items-center">
        <Image src={Logo} alt="Logo" width={200} />

        <div className="flex flex-col gap-3">
          <div className="flex border rounded-full px-3 py-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <Image src={SearchIcon} alt="Search Icon" width={20} />
            <input
              type="text"
              className="w-full ml-2 rounded-r-full border-l px-2 focus:outline-none"
            />
          </div>
          <ul className="flex justify-between">
            <li>Computadoras</li>
            <li>Productos</li>
            <li>Nosotros</li>
          </ul>
        </div>

        <div className="flex gap-5 justify-end">
          <Image src={CartIcon} alt="Cart icon" width={20} height={20} />
          <Image
            src={LanguageIcon}
            alt="Language icon"
            width={20}
            height={20}
          />
          <Image src={UserIcon} alt="user icon" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
