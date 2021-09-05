export default function WishList() {
  return (
    <div>
      <div className='flex py-2 pr-5 text-center text-secondary hover:text-primary'>
        <div className='inline-flex'>
          <button
            className='text-gray-600 border-transparent rounded-full hover:text-beige focus:outline-none focus:text-secondary'
            aria-label='Notifications'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' />
            </svg>
          </button>
        </div>
        <div className='inline-flex mt-1 ml-2'>
          <h3 className='mr-2 text-sm font-medium text-secondary'>WISHLIST</h3>
        </div>
      </div>
    </div>
  )
}
