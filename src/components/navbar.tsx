import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header className="flex justify-center !transition-all !duration-100">
      <nav className="z-20 flex fixed top-6 justify-between items-center w-[90vw] max-w-[1500px] backdrop-blur-2xl bg-lightBlack p-2 lg:p-3.5 rounded-full shadow-md border border-gold">
        <Link href={"/"} className="text-base lg:text-2xl">
          Logo
        </Link>
        <button className="flex items-center gap-2 lg:gap-3 text-base lg:text-xl bg-white p-1 lg:p-2 px-3.5 lg:px-5 rounded-full hover:cursor-pointer">
          <FiMenu size={20} /> Menu
        </button>
      </nav>
    </header>
  );
}
