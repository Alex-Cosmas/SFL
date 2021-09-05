import Link from 'next/link'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'

export default function Shop() {
  return (
    <>
      <Headline title='Serving you gourmet delicacies any day, any time!!' />
      <ProductNav />
    </>
  )
}

Shop.Layout = ParentLayout

