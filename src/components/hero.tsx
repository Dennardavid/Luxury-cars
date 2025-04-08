import Image from "next/image";
import backgroundImg from "../../public/prado.png";

export default function Hero() {
  return (
    <section className="h-[90dvh] flex justify-between items-center max-w-[1500px] mx-auto">
      <div className="flex flex-col gap-15">
        <h1 className="text-lightBlack font-semibold text-8xl">
          Ride in Style <br />
          Ride in Luxury
        </h1>
        <p className="text-xl w-[46%] font-normal">
          Experience the thrill of riding in elegance. Whether it's a night out,
          a business trip, or a weekend escape, our fleet of luxury cars is
          ready to elevate your journey. Indulge in comfort, and prestige
          because you deserve nothing less.
        </p>
        <button className="p-3 bg-lightBlack text-mainWhite rounded-full w-64 font-medium text-xl">
          Ride Now
        </button>
      </div>
      <Image
        src={backgroundImg}
        alt="prado"
        style={{ objectFit: "cover" }}
        quality={100}
        priority={true}
        placeholder="blur"
        className="absolute right-10 bottom-15 -z-20"
      />
    </section>
  );
}
