export default function SelectCars() {
  const carDetails = [
    { name: "Mercedes" },
    { name: "Rolls-Royce" },
    { name: "Toyota-Prado" },
    { name: "Ferrari" },
  ];
  return (
    <section className="max-w-[1500px] mx-auto mt-5">
      <h2 className="text-center font-black text-5xl">
        Pick Your <span className="stroke">Signature</span> Ride
      </h2>
      <div></div>
    </section>
  );
}
