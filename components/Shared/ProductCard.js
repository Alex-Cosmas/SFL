import Image from "next/image";

export default function ProductCard({ product, addItem }) {
  return (
    <div>
      <div className="my-10 shadow-md h-[400px] hover:bg-secondary hover:text-beige hover:font-semibold bg-primary  hover:cursor-pointer">
        <div className="relative h-[200px] ">
          <Image
            src="https://res.cloudinary.com/alexoc/image/upload/v1630669731/SFL/300x200_KRUH_tzytk1.jpg"
            alt="HeroBg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h2>{product.name}</h2>
          <h2>{product.amount}</h2>
        </div>
        <button onClick={() => addItem("ADDITEM", { product })}>
          Add Item To Cart
        </button>
      </div>
    </div>
  );
}
