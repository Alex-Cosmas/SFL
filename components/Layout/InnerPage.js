import Header from '../Shared/Header'

export default function InnerLayout({ children }) {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
      </div>
      <div className=''>
        <div className=''>{children}</div>
      </div>
    </>
  )
}
