import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import Form from '~/components/Shared/Form'

import OrderSummary from '~/components/Shared/OrderSummary'

export default function Order({ current, addItem }) {
  return (
    <>
      <Headline title='Order Details' />

      <div className='container px-4 mx-auto md:px-24'>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='my-10'>
            <Form />
          </div>
          <div className='my-10'>
            <OrderSummary
              current={current}
              addItem={addItem}
              action='confirm'
            />
          </div>
        </div>
      </div>
    </>
  )
}

Order.Layout = ParentLayout
