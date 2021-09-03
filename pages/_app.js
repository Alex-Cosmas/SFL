// import Layout from '~/components/Layout'
import MainLayout from '~/components/Layout'
import Header from '~/components/Shared/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}

      <div className=''>
        <MainLayout>{children} </MainLayout>
      </div>
    </div>
  )
}

export default MyApp
