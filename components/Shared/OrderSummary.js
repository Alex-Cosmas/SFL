import Toggle from '~/components/Shared/Toggle'

export default function OrderSummary() {
  return (
    <>
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
          <div className='text-xl font-bold text-orange-900'>Total Amount</div>
          <div className='text-2xl font-bold text-orange-900'>$114</div>
        </div>
        <button className='w-full px-4 py-4 mt-3 font-bold rounded shadow bg-secondary text-beige hover:text-secondary hover:bg-primary'>
          ADD CONTACT DETAILS
          {/* CONFIRM DETAILS */}
          {/* PROCEED TO CHECKOUT SCREEN */}
        </button>
      </div>
    </>
  )
}
