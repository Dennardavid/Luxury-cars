import Image from "next/image";
import backgroundImg from "../../public/mercedes.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className=" h-screen absolute w-full bg-black/35 z-5"></div>
      <Image
        src={backgroundImg}
        alt="prado"
        style={{objectFit:"cover"}}
        quality={100}
        priority={true}
        fill={true}
        placeholder="blur"
        className="-z-20 absolute inset-0"
      />
      <div className="w-full z-10">
        <h1 className="text-white font-extrabold text-9xl">Ride in Style <br />Ride in Luxury</h1>
      </div>
    </section>
  );
}
