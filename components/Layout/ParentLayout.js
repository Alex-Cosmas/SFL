import Header from '~/components/Shared/Header'

export default function ParentLayout({ children }) {
  return (
    <>
      <div className='container mx-auto'>
        <Header />
      </div>

      <div className=''> {children}</div>
    </>
  )
}
