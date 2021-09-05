import Link from "next/link";

const products = [
  { id: "cakes", name: "Specialty Pastries & Baked Goods" },
  { id: "muffins", name: "Muffins & Bread" },
];
export default function ProductNav() {
  return (
    <>
      <div className="bg-secondary text-primary">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center py-3 space-x-4 ">
            {products.map((product) => {
              return (
                <Link key={product.id} href={`/shop/categories/${product.id}`}>
                  {product.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
