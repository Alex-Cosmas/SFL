export default function Profile() {
  return (
    <>
      <div className='flex ChefsProfile'>
        <div className='w-full p-4 sm:p-6 lg:p-8'>
          <div className='flex justify-between'>
            <span className='block text-xl font-semibold'>Chef Valdez</span>
            <a
              href='#'
              className='px-5 py-2 -mt-2 font-medium text-white rounded-sm shadow-md bg-secondary text-md hover:bg-white hover:text-secondary'
            >
              Edit
            </a>
          </div>

          <div className='flex w-full'>
            <div className='w-1/5 pt-10'>
              <div className='flex w-32 h-32 overflow-hidden rounded-full'>
                <img
                  id='showImage'
                  className='object-cover w-full h-full text-gray-300'
                  src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=htmlFormat&fit=crop&w=200&q=200'
                  alt=''
                />
              </div>
            </div>
            <div className='w-4/5'>
              <div className='w-full p-8 lg:ml-4'>
                <div className='p-6 bg-white rounded shadow'>
                  <div className='pb-6'>
                    <label
                      htmlFor='name'
                      className='block pb-1 font-semibold text-gray-700'
                    >
                      Name
                    </label>
                    <div className='flex'>
                      <input
                        disabled
                        id='username'
                        className='w-full px-4 py-2 rounded-r border-1'
                        type='text'
                        value='Jane Doe'
                      />
                    </div>
                  </div>
                  <div className='pb-4'>
                    <label
                      htmlFor='about'
                      className='block pb-1 font-semibold text-gray-700'
                    >
                      Email
                    </label>
                    <input
                      disabled
                      id='email'
                      className='w-full px-4 py-2 rounded-r border-1'
                      type='email'
                      value='example@example.com'
                    />
                  </div>
                  <div className='pb-4'>
                    <label
                      htmlFor='about'
                      className='block pb-1 font-semibold text-gray-700'
                    >
                      Bio
                    </label>
                    <textarea
                      className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none'
                      rows='4'
                    >
                      Chef Valdez's tantalizing culinary journey spans across
                      ten destinations, in eight countries, across four
                      continents. With a drive to constantly strive htmlFor
                      more, Chef Valdes' has transhtmlFormed the shape of
                      cuisine and cooking altogether through a glitzing career
                      of over 25 years to date. Since his arrival to the Kingdom
                      in June, Chef Valdez has been the Executive Chef where he
                      has been curating culinary concepts htmlFor the highly
                      anticipated W Amman, ensuring that the city's newest
                      iconic landmark debuts with a culinary experience like no
                      other.
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
