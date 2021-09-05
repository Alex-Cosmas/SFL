import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'

import CartComponent from '~/components/Shared/Cart'

export default function confirmOrder() {
  return (
    <>
      <Headline title='Confirm Order' />

      <div className='container px-24 mx-auto'>
        <div className='my-10'>
          <CartComponent />
        </div>
      </div>
    </>
  )
}

confirmOrder.Layout = ParentLayout
