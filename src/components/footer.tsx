export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer className="w-full bg-lightBlack z-10 text-mainWhite">
      <div className="w-full max-width-[1500px]">
        <p className=" text-sm">&#169; Luxury Rides {year} </p>
      </div>
    </footer>
  );
}
