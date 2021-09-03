import Header from '../Shared/Header'
export default function Unstyled({ children }) {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
      </div>
      <main className=''>{children}</main>
    </>
  )
}
