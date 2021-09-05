import Link from 'next/link'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'
import CartComponent from '~/components/Shared/Cart'

export default function Cart() {
  return (
    <>
      <Headline title='My Cart' />

      <div className='container px-24 mx-auto'>
        <div className='my-10'>
          <CartComponent />
        </div>
      </div>
    </>
  )
}

Cart.Layout = ParentLayout
