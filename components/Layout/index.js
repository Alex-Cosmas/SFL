import Footer from '../Shared/Footer'
import Header from '../Shared/Header'

function Layout({ children }) {
  return (
    <>
      <>
        <div className='container mx-auto'>
          <Header />
        </div>
        <main className=''>{children}</main>
      </>
    </>
  )
}
export default Layout
