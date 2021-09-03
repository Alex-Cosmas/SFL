function TopBar() {
  return (
    <>
      <section className='text-wsGrey-200 bg-optional '>
        <div className='container flex p-4 mx-auto font-semibold text-white md:py-3 '>
          <div className='items-center md:ml-auto'>
            <div className='flex flex-col leading-tight md:space-x-5 md:flex-row'>
              <p> Have any questsions? </p>
              <div className='flex space-x-2 '>
                <p> Call: </p>
                <p> +254 729 270 191</p>
              </div>

              <div className='flex space-x-2 '>
                <p> Email: </p>
                <p> info@mdfkenya.org</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBar
