import Carousel from "./ui/carousel";

export default function SelectCars() {
  return (
    <section className="max-w-[1500px] mx-auto mt-5">
      <h2 className="text-center font-black text-5xl">
        Pick Your Signature Ride
      </h2>
      <Carousel />
    </section>
  );
}
