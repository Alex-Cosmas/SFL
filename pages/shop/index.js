import Link from 'next/link'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'

export default function Shop() {
  return (
    <>
      <Headline title='Serving you gourmet delicacies any day, any time!!' />
      <ProductNav />
      <div className='container mx-auto'>
        {/* Product Component */}
        {/* <div className='grid grid-cols-3'>
          <div>
            <div className='relative w-[200px]'>
              <Image
                src='https://res.cloudinary.com/alexoc/image/upload/v1630669731/SFL/300x200_KRUH_tzytk1.jpg'
                alt='HeroBg'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='p-4'>
              <h2>Cake</h2>
            </div>
          </div>
        </div> */}

        
      </div>
    </>
  )
}

Shop.Layout = ParentLayout

