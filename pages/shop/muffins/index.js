import Image from 'next/image'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'

export default function Muffins() {
  return (
    <>
      <Headline title='Muffins &amp; Bread' />
      <ProductNav />
      <div className='container mx-auto'>
        {/* Product Component */}
        <div className='grid grid-cols-3 gap-10'>
          <div className='my-4'>
            <div className='relative h-[200px]'>
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
        </div>
      </div>
    </>
  )
}

Muffins.Layout = ParentLayout
