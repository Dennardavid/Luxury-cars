import Image from "next/image";
import backgroundImg from "../../public/prado.png";

export default function Hero() {
  return (
    <section className="mt-[25%] md:h-[90dvh] flex flex-col md:flex-row justify-between items-center max-w-[1500px] mx-auto relative px-4">
      <div className="flex flex-col gap-3 md:gap-15 items-center">
        <h1 className="text-lightBlack font-semibold text-4xl md:text-8xl text-center">
          Ride in Style <br />
          Ride in Luxury
        </h1>
        <p className="text-xs md:text-lg w-[90%] md:w-[45%] font-normal text-center">
          Experience the thrill of riding in elegance. Whether it's a night out,
          a business trip, or a weekend escape, our fleet of luxury cars is
          ready to elevate your journey. Indulge in comfort, and prestige
          because you deserve nothing less.
        </p>
        <button className="p-1 md:p-2 bg-lightBlack text-mainWhite rounded-full w-50 md:w-64 font-medium text-sm md:text-xl hover:cursor-pointer border-1 border-gold">
          Ride Now
        </button>
      </div>

      <div className="mt-8 md:mt-0 md:absolute md:right-10 md:bottom-15 md:-z-10">
        <Image
          src={backgroundImg}
          alt="prado"
          style={{ objectFit: "cover" }}
          quality={100}
          priority={true}
          placeholder="blur"
          className="w-full max-w-xs md:max-w-xl"
        />
      </div>
    </section>
  );
}
