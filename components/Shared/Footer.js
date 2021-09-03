import Logo from './Logo'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <>
      {/* flex flex-col items-center justify-center px-4 md:px-24 py-10 mx-auto */}
      <section className='w-full text-white bg-gray-900'>
        <div className='container flex flex-col px-6 py-10 mx-auto '>
          <div className='grid grid-cols-1 gap-4 md:gap-0 md:divide-x-2 md:grid-cols-3 divide-optional'>
            <div className='w-full space-y-6'>
              <div className='relative h-24 '>
                <Link href='/'>
                  <a>
                    {/* Logo */}
                    <Image
                      src='/MDF Kenya Logo-01.svg'
                      alt='HeroBg'
                      layout='fill'
                      objectFit='contain'
                      className='absolute'
                    />
                  </a>
                </Link>
              </div>

              <p>
                Miracle Dave Foundation is an initiative based in Nairobi Kenya
                that supports, educates and improves lives of deprived
                communities, orphans, people with disabilities and vulnerable
                children in Kenya.
              </p>
            </div>

            <div className='md:px-6 FooterContact '>
              <div className='flex flex-col justify-between gap-4 md:flex-row '>
                <div>
                  <h4 className='font-semibold'>Contact Details</h4>
                  <div className='space-y-4 '>
                    <p>
                      P.O Box 26051 <br />
                      Code: 00100 <br />
                      Utalii House <br />
                      Office number 1017 <br />
                      Block number 1
                    </p>
                    <div>
                      <p>Phone Number</p>
                      <p>+254792708191</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='font-semibold'>International Details </h4>
                  <div className='space-y-4 '>
                    <div>
                      <div>10605 SE 240th St #147</div>
                      <div> Kent, WA 98031 USA</div>
                    </div>
                    <div>
                      <div>Phone Number</div>
                      <div>2065803805/2054276922</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  */}
            <div className='md:px-6 FooterContact'>
              <div className='grid gap-3 py-5 md:gap-0 md:py-0 md:grid-cols-2'>
                <div>
                  <h4 className='font-semibold'>Links </h4>
                  <ul>
                    <li>About Us </li>
                    <li>How to help</li>
                    <li>Gallery</li>
                    <li>Donate </li>
                  </ul>
                </div>{' '}
                <div className=''>
                  <h4 className='font-semibold'>Social Details </h4>
                  <div>
                    <p>Facebook</p>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
          {/*  */}
        </div>
      </section>
    </>
  )
}
export default Footer
