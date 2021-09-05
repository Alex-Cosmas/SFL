export default function Toggle({ priceToggle }) {
  return (
    <>
      <div className='pb-5'>
        <label htmlFor='toogleA' className='flex items-center cursor-pointer'>
          {/* Toogle  */}
          <div className='relative'>
            {/* Input */}
            <input id='toogleA' type='checkbox' className='sr-only' />
            {/* Line */}
            <div className='w-10 h-4 rounded-full shadow-inner bg-beige'></div>
            {/* Dot */}
            <div className='absolute w-6 h-6 transition rounded-full shadow dot bg-primary -left-1 -top-1'></div>
          </div>
          {/* Label */}
          <div className='ml-3 font-medium text-gray-700'>{priceToggle}</div>
        </label>
      </div>
    </>
  )
}
