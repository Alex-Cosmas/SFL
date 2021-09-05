import Toggle from './Toggle'

export default function CartComponent() {
  return (
    <>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <h3 className='px-0 py-4 mt-4 text-xl font-bold'>Basket</h3>

          <div className='flex'>
            <div className='relative flex-none w-48'>
              <img
                src='https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                alt=''
                className='absolute inset-0 object-cover w-full h-full'
              />
            </div>
            <div className='flex-auto p-6 bg-white shadow-md'>
              <div className='flex flex-wrap'>
                <h1 className='flex-auto text-xl font-semibold'>Red Velvet</h1>
                <div className='flex-none w-full my-1 text-sm font-medium text-gray-500'>
                  Extra Details: With Extra Cream
                </div>
              </div>
              <div className='flex justify-between mt-10'>
                <div className='inline-flex'>
                  <div className='flex items-center justify-between space-x-4'>
                    <button
                      className='flex items-center justify-center px-2 py-1 border border-gray-300 rounded-md'
                      type='button'
                    >
                      +
                    </button>
                    <div>2</div>
                    <button
                      className='flex items-center justify-center px-2 py-1 border border-gray-300 rounded-md'
                      type='button'
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className='text-xl font-semibold text-gray-500'>
                  $49.00
                </div>
              </div>
            </div>
          </div>

          <div className='flex my-10'>
            <div className='relative flex-none w-48'>
              <img
                src='https://images.pexels.com/photos/1302883/pexels-photo-1302883.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                alt=''
                className='absolute inset-0 object-cover w-full h-full'
              />
            </div>
            <div className='flex-auto p-6 bg-white shadow-md'>
              <div className='flex flex-wrap'>
                <h1 className='flex-auto text-xl font-semibold'>Red Velvet</h1>
                <div className='flex-none w-full my-1 text-sm font-medium text-gray-500'>
                  Extra Details: With Extra Cream
                </div>
              </div>
              <div className='flex justify-between mt-10'>
                <div className='inline-flex'>
                  <div className='flex items-center justify-between space-x-4'>
                    <button
                      className='flex items-center justify-center px-2 py-1 border border-gray-300 rounded-md'
                      type='button'
                    >
                      +
                    </button>
                    <div>2</div>
                    <button
                      className='flex items-center justify-center px-2 py-1 border border-gray-300 rounded-md'
                      type='button'
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className='text-xl font-semibold text-gray-500'>
                  $49.00
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='px-8 py-4 bg-white rounded shadow'>
            <div>
              <div className='flex items-center justify-between mt-4'>
                <h3 className='text-xl font-bold'>Order Summary</h3>
                {/* Toogle Price  */}
                <Toggle priceToggle='Currency Switch' />
              </div>

              <div className='flex flex-wrap items-center justify-between w-full p-4 mt-5 border-b-2 rounded'>
                <div className='w-2/3'>
                  <h3 className='text-lg font-medium'>Red Velvt</h3>
                  <p className='text-xs text-gray-600'>
                    Extra Details:{' '}
                    <b className='text-xs font-bold text-red-700'>
                      with extra cream
                    </b>
                  </p>
                </div>
                <div>
                  <h4 className='text-3xl font-medium'>
                    <sup className='text-lg text-purple-800'>$</sup> 89
                  </h4>
                </div>
              </div>

              <div className='flex flex-wrap items-center justify-between w-full p-4 border-b-2 rounded first'>
                <div className='w-2/3'>
                  <h3 className='text-lg font-medium'>Black Forest Velvt</h3>
                  <p className='text-xs text-gray-600'>
                    Extra Details:{' '}
                    <b className='text-xs font-bold text-red-700'>
                      with extra cream
                    </b>
                  </p>
                </div>
                <div>
                  <h4 className='text-3xl font-medium'>
                    <sup className='text-lg text-purple-800'>$</sup> 89
                  </h4>
                </div>
              </div>

              <div className='flex flex-wrap items-center justify-between w-full p-4 border-b-2 rounded first'>
                <div className='w-2/3'>
                  <h3 className='text-lg font-medium'>Chocolate Fudge Cake</h3>
                  <p className='text-xs text-gray-600'>
                    Extra Details:{' '}
                    <b className='text-xs font-bold text-red-700'>
                      with extra cream
                    </b>
                  </p>
                </div>
                <div>
                  <h4 className='text-3xl font-medium'>
                    <sup className='text-lg text-purple-800'>$</sup> 89
                  </h4>
                </div>
              </div>
            </div>
            <div className='flex justify-between p-4 mt-3'>
              <div className='text-xl font-bold text-orange-900'>
                Total Amount
              </div>
              <div className='text-2xl font-bold text-orange-900'>$114</div>
            </div>
            <button className='w-full px-4 py-4 mt-3 font-bold rounded shadow bg-secondary text-beige hover:text-secondary hover:bg-primary'>
              ADD CONTACT DETAILS
              {/* CONFIRM DETAILS */}
              {/* PROCEED TO CHECKOUT SCREEN */}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
