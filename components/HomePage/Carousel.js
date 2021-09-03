export default function Carousel() {
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
    </div>
  )
}
