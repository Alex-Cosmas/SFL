import Link from 'next/link'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'

export default function Shop(props) {
  console.log(props,"shop page")
  return (
    <>
      <Headline title='Serving you gourmet delicacies any day, any time!!' cart={props.current} />
      <ProductNav />
    </>
  )
}

Shop.Layout = ParentLayout

