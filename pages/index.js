// import Image from 'next/image'
import Head from 'next/head'
import Carousel from '~/components/HomePage/Carousel'
import UnStyled from '~/components/Layout/UnStyled'

// import HeroComponent from '~/components/HomePage/Hero'

function Home() {
  return (
    <>
      <Head>
        <title>SFL Bakery: Your Online Bakery Companion</title>
        <meta
          name='description'
          content='SFL Bakery: Your Online Bakery Companion'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {/* <HeroComponent /> */}
        <Carousel />
      </main>
    </>
  )
}

Home.Layout = UnStyled

export default Home
