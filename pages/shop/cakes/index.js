import Image from 'next/image'
import ParentLayout from '~/components/Layout/ParentLayout'
import Headline from '~/components/Shared/Headline'
import ProductNav from '~/components/Shared/ProductNav'

export default function Cakes() {
  const data = [
    { name: 'Red Velvet', amount: '$30' },
    { name: 'Black Forest', amount: '$30' },
    { name: 'Chocolate fudge cake', amount: '$30' },
  ]

  return (
    <>
      <Headline title='Specialty Pastries & Baked Goods' />
      <ProductNav />
      <div className='container px-24 mx-auto'>
        <div className='grid w-full grid-cols-3 gap-10'>
          {data.map((d, idx) => {
            return (
              <div key={idx}>
                <div className='my-10 shadow-md h-[400px] hover:bg-secondary hover:text-beige hover:font-semibold bg-primary  hover:cursor-pointer'>
                  <div className='relative h-[200px] '>
                    <Image
                      src='https://res.cloudinary.com/alexoc/image/upload/v1630669731/SFL/300x200_KRUH_tzytk1.jpg'
                      alt='HeroBg'
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='p-6'>
                    <h2>{d.name}</h2>
                    <h2>{d.amount}</h2>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

Cakes.Layout = ParentLayout
