import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import Form from '~/components/Shared/Form'
import OrderSummary from '~/components/Shared/OrderSummary'

export default function confirmOrder({ current, addItem }) {
  return (
    <>
      <Headline title='Confirm Order' />

      <div className='container px-24 mx-auto'>
        <div className='my-10'>
          <div className='grid grid-cols-2 gap-8'>
            <div className=''>
              <Form />
            </div>
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

confirmOrder.Layout = ParentLayout
