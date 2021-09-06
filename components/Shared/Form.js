export default function Form() {
  return (
    <>
      <div className=''>
        <div className='flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'>
          <div className='flex items-center justify-between my-4'>
            <h3 className='text-xl font-bold'>Your Contact Details</h3>
          </div>
          <div className='mb-6 -mx-3 md:flex'>
            <div className='px-3 mb-6 md:w-1/2 md:mb-0'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-first-name'
              >
                {' '}
                First Name{' '}
              </label>
              <input
                className='block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red'
                id='grid-first-name'
                type='text'
                placeholder='Jane'
              />
              <p className='text-xs italic text-red'>
                Please fill out this field.
              </p>
            </div>
            <div className='px-3 md:w-1/2'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-last-name'
              >
                {' '}
                Last Name{' '}
              </label>
              <input
                className='block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter'
                id='grid-last-name'
                type='text'
                placeholder='Doe'
              />
            </div>
          </div>

          <div className='mb-6 -mx-3 md:flex'>
            <div className='px-3 mb-6 md:w-1/2 md:mb-0'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-first-name'
              >
                {' '}
                Phone Number
              </label>
              <input
                className='block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red'
                id='grid-first-name'
                type='text'
                placeholder='+254 720 000 000'
              />
              <p className='text-xs italic text-red'>
                Please fill out this field.
              </p>
            </div>
            <div className='px-3 md:w-1/2'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-last-name'
              >
                {' '}
                Email Details{' '}
              </label>
              <input
                className='block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter'
                id='grid-last-name'
                type='text'
                placeholder='janedoe@email.com'
              />
            </div>
          </div>

          <div className='mb-2 -mx-3 md:flex'>
            <div className='px-3 mb-6 md:w-1/2 md:mb-0'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-city'
              >
                {' '}
                City{' '}
              </label>
              <input
                className='block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter'
                id='grid-city'
                type='text'
                placeholder='Albuquerque'
              />
            </div>
            <div className='px-3 md:w-1/2'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-state'
              >
                {' '}
                State{' '}
              </label>
              <div className='relative'>
                <select
                  className='block w-full px-4 py-3 pr-8 border rounded appearance-none bg-grey-lighter border-grey-lighter text-grey-darker'
                  id='grid-state'
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                  <div className='absolute flex items-center px-2 pointer-events-none pin-y pin-r text-grey-darker'>
                    <svg
                      className='w-4 h-4'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                    >
                      <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                  </div>
                </select>
              </div>
            </div>
            <div className='px-3 md:w-1/2'>
              <label
                className='block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker'
                htmlFor='grid-zip'
              >
                {' '}
                Zip{' '}
              </label>
              <input
                className='block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter'
                id='grid-zip'
                type='text'
                placeholder='90210'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
