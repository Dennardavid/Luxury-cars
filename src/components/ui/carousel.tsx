import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Carousel() {
  const carDetails = [
    {
      name: "Mercedes",
      image: "prado.png",
      description: "Perfect for weddings, airport pickups, and VIP transfers.",
      rate: "#100k/8hrs",
    },
    {
      name: "Rolls-Royce",
      image: "prado.png",
      description: "Perfect for weddings, airport pickups, and VIP transfers.",
      rate: "#100k/8hrs",
    },
    {
      name: "Toyota-Prado",
      image: "prado.png",
      description: "Perfect for weddings, airport pickups, and VIP transfers.",
      rate: "#100k/8hrs",
    },
    {
      name: "Ferrari",
      image: "prado.png",
      description: "Perfect for weddings, airport pickups, and VIP transfers.",
      rate: "#100k/8hrs",
    },
  ];
  return (
    <div>
      <div className="max-w-[1500px] mx-auto flex justify-evenly my-5">
        <button className="p-4 rounded-full bg-lightBlack shadow-2xs text-white border border-gold">
          <FaArrowLeftLong size={20} />
        </button>
        <button className="p-4 rounded-full bg-lightBlack shadow-2xs text-white border border-gold">
          <FaArrowRightLong size={20} />
        </button>
      </div>
    </div>
  );
}
