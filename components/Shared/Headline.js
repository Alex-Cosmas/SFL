export default function SharedHero({ title }) {
  return (
    <>
      <div
        className='relative flex items-center content-center justify-center pt-12'
        style={{
          minHeight: '55vh',
        }}
      >
        <div
          className='absolute top-0 w-full h-full bg-center bg-cover'
          style={{
            backgroundImage:
              "url('https://images.contentstack.io/v3/assets/blt72739032ac3bdcc6/blt67c9d389ad1dcdd1/60a538ad5115075c49e50d6d/210519-WLF-Muffins&Breads-EnglishMuffin-Hero.jpg?quality=75&auto=webp&optimize={medium}')",
          }}
        >
          <span
            id='blackOverlay'
            className='absolute w-full h-full bg-black opacity-75'
          ></span>
        </div>
        <div className='container relative mx-auto'>
          <div className='w-full px-4 ml-auto mr-auto text-center lg:w-7/12'>
            <div>
              <div className='text-4xl font-semibold text-white'>{title}</div>
            </div>
            {/* <div>
              <p className='mt-4 text-lg text-gray-300'>
                Bring a variety of flavor and texture to the table with
                Wolferman’s® pastries and baked goods.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
