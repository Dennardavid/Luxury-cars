import Link from "next/link";
import { FiMenu } from "react-icons/fi";

export default function Header() {
  return (
    <header
      className="z-20 fixed w-full p-6.5 flex justify-center !transition-all !duration-100"
    >
      <nav className="flex justify-between items-center w-full max-w-[1500px] backdrop-blur-2xl bg-white/60 p-3.5 rounded-full">
        <Link href={"/"} className="text-2xl">
          Logo
        </Link>
        <button className="flex items-center gap-3 text-2xl bg-white p-2 px-5 rounded-full hover:cursor-pointer">
          <FiMenu size={30} /> Menu
        </button>
      </nav>
    </header>
  );
}
