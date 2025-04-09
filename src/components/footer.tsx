import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="text-xs md:text-sm w-full bg-lightBlack z-10 text-mainWhite p-5 flex flex-col items-center">
      <div className="w-full max-w-[1500px]">
        <section className="flex flex-row items-center justify-between w-full mb-3">
          <div>
            <Link href="#">Logo</Link>
            <p className="mt-5">
              Ride in Style <br />
              Ride in Luxury
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <Link
              href="#"
              className="text-gold hover:text-mainWhite !transition-all !duration-100"
            >
              <FaInstagram size={25} />
            </Link>
            <Link
              href="#"
              className="text-gold hover:text-mainWhite !transition-all !duration-100"
            >
              <IoLogoFacebook size={25} />
            </Link>
            <Link
              href="#"
              className="text-gold hover:text-mainWhite !transition-all !duration-100"
            >
              <FaXTwitter size={25} />
            </Link>
          </div>
        </section>
        <section className="flex justify-between mt-7">
          <p className="text-center">&#169; {year} All Right Reserved </p>
          <div className="flex flex-row justify-center mb-1.5">
            <Link
              href="#"
              className=" hover:text-gold !transition-all !duration-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="before:content-['|'] before:mx-2 hover:text-gold !transition-all !duration-100"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              className="before:content-['|'] before:mx-2 hover:text-gold !transition-all !duration-100"
            >
              Cookies
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
