import Image from 'next/image'
import WishList from '~/components/Shared/WishList'

export default function ProductCard({ product, addItem, currency }) {
  return (
    <div>
      <div className='my-10 shadow-md h-[400px] hover:bg-white hover:text-secondary hover:font-semibold bg-beige  hover:cursor-pointer'>
        <div className='relative h-[200px] '>
          <Image
            src='https://res.cloudinary.com/alexoc/image/upload/v1630669731/SFL/300x200_KRUH_tzytk1.jpg'
            alt='HeroBg'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex flex-col flex-auto p-6'>
          <div className='flex flex-col flex-1'>
            <h2>{product.name}</h2>
            <h2>{currency} {product.amount}</h2>
          </div>
          <div className='flex flex-wrap content-end '>
            <WishList />
            <button
              className='flex-auto py-1.5 px-4 rounded-sm shadow-md bg-secondary text-white text-sm font-normal'
              onClick={() => addItem('ADDITEM', { product })}
            >
              Add Item To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
