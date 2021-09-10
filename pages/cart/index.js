import ParentLayout from '~/components/Layout/ParentLayout'
import CartComponent from '~/components/Shared/Cart'
import Headline from '~/components/Shared/Headline'

export default function Cart(props) {
  return (
    <>
      <Headline title='My Cart' />
      <div className='container px-4 mx-auto md:px-24'>
        <div className='my-10'>
          <CartComponent current={props.current} addItem={props.addItem} />
        </div>
      </div>
    </>
  )
}

Cart.Layout = ParentLayout
