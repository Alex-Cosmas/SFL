import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'
import Form from '~/components/Shared/Form'

import OrderSummary from '~/components/Shared/OrderSummary'

export default function Order() {
  return (
    <>
      <Headline title='Order Details' />

      <div className='container px-24 mx-auto'>
        <div className='grid grid-cols-2 gap-8'>
          <div className='my-10'>
            <Form />
          </div>
          <div className='my-10'>
            <OrderSummary />
          </div>
        </div>
      </div>
    </>
  )
}

Order.Layout = ParentLayout
