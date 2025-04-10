import Image from "next/image";
import backgroundImg from "../../public/prado.png";

export default function Hero() {
  return (
    <section className="mt-[25%] md:mt-[14%] lg:mt-0 lg:h-[90dvh] flex flex-col lg:flex-row items-center max-w-[1500px] mx-auto relative">
      <div className="flex flex-col gap-3 lg:gap-15 items-center lg:items-start">
        <h1 className="font-black text-4xl md:text-7xl lg:text-8xl text-center lg:text-left">
          Ride in Style <br />
          Ride in Luxury
        </h1>
        <p className="text-xs md:text-sm lg:text-lg w-[90%] md:w-[60%] lg:w-[43%] font-light text-center lg:text-left">
          Experience the thrill of riding in elegance. Whether it's a night out,
          a business trip, or a weekend escape, our fleet of luxury cars is
          ready to elevate your journey. Indulge in comfort, and prestige
          because you deserve nothing less.
        </p>
        <button className="p-1 lg:p-2 bg-lightBlack text-mainWhite rounded-full w-50 lg:w-64 font-light text-sm lg:text-xl hover:cursor-pointer border-1 border-gold">
          Ride Now
        </button>
      </div>

      <div className="mt-4 lg:mt-0 lg:absolute lg:-right-30 lg:bottom-3 lg:-z-10">
        <Image
          src={backgroundImg}
          alt="prado"
          style={{ objectFit: "cover" }}
          quality={100}
          priority={true}
        />
      </div>
    </section>
  );
}
