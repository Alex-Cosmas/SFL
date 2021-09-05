import Link from "next/link";
import Image from "next/image";
import ParentLayout from "~/components/Layout/ParentLayout";
import Headline from "~/components/Shared/Headline";
import ProductNav from "~/components/Shared/ProductNav";
import { categoriesList, apiHelperFunctions } from "../../../lib/api";

// const products = productsList;
const categories = categoriesList;

export default function Category({ params }) {
  const products = apiHelperFunctions.categoryProductsFilterd(params?.id);
  return (
    <>
      <Headline title="Serving you gourmet delicacies any day, any time!!" />
      <ProductNav />
      <div className="container px-24 mx-auto">
        <div className="grid w-full grid-cols-3 gap-10">
          {products.map((d, idx) => {
            return (
              <div key={idx}>
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
                    <h2>{d.name}</h2>
                    <h2>{d.amount}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = categories.map((category) => {
    // const products = apiHelperFunctions.categoryFilterd(category.id);
    return {
      params: {
        ...category,
        // products,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let category = apiHelperFunctions.getCategoryById(params.id);
  category = category.length > 0 ? category[0] : undefined;
  return {
    props: {
      params: category,
    },
  };
}

Category.Layout = ParentLayout;
