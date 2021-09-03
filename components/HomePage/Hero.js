/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'

function Hero() {
  return (
    <>
      <section className='bg-primary'>
        <div className='container w-full mx-auto md:h-[500px]  text-wsGrey-200'>
          <div className='grid h-full md:grid-cols-2'>
            <div className='flex items-center justify-center '>
              <h3 className='p-6 font-semibold text-7xl '>
                <span className='text-optional'>Children</span>
                <span className='text-white'> are a heritage from</span>
                <span className='text-optional'> God</span>
              </h3>
            </div>
            <div className='flex flex-col justify-end h-full md:mt-14'>
              <div className='relative h-96 min-w-[300px]  border-4 border-white'>
                <Image
                  src='https://static.wixstatic.com/media/543af2_7931931901f24fc989028a0e5a55df01~mv2.jpg/v1/fill/w_369,h_565,al_c,q_80,usm_0.66_1.00_0.01/3kids.webp'
                  alt='HeroBg'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Hero
