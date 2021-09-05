export default function Carousel({ title, tag }) {
  return (
    <div
      className='relative flex items-center content-center justify-center pt-16 pb-32'
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage:
            "url('https://images.contentstack.io/v3/assets/blt72739032ac3bdcc6/blt6c348661b122b644/60a54861dcc9b9546bfe4c4b/210519-WLF-Pastries&BakedGoods-Hero.jpg?quality=75&auto=webp&optimize={medium}')",
        }}
      >
        <span
          id='blackOverlay'
          className='absolute w-full h-full bg-black opacity-75'
        ></span>
      </div>

      <div className='container relative mx-auto'>
        <div className='w-full px-4 ml-auto mr-auto space-y-10 text-center max-w-prose lg:w-3/4'>
          <div>
            <div className='font-bold text-white text-7xl md:font-bold md:text-9xl'>
              {title}
              {tag}
            </div>
          </div>
          <div className=''>
            <p className='mt-4 text-lg text-gray-300'>
              Bring a variety of flavor and texture to the table with SFL
              Bakery® pastries and baked goods.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
