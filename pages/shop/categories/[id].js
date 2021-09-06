import Link from 'next/link'
import Image from 'next/image'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'
import { categoriesList, apiHelperFunctions } from '../../../lib/api'
// import { useMachine } from "@xstate/rect";
import ProductCard from '~/components/Shared/ProductCard'
// const products = productsList;
const categories = categoriesList

export default function Category({ params, current, addItem }) {
  // console.log(current, "category page");
  const products = apiHelperFunctions.categoryProductsFilterd(params?.id)
  return (
    <>
      <Headline title='Any day, Any time!!' cart={current} />
      <ProductNav />
      <div className='container px-24 mx-auto'>
        <div className='grid w-full grid-cols-3 gap-10'>
          {products.map((d, idx) => {
            return (
              <ProductCard
                key={idx}
                product={d}
                addItem={addItem}
                currency={current.context.currency}
              />
            )
          })}
        </div>
      </div>
    </>
  )
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
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let category = apiHelperFunctions.getCategoryById(params.id)
  category = category.length > 0 ? category[0] : undefined
  return {
    props: {
      params: category,
    },
  }
}

Category.Layout = ParentLayout
