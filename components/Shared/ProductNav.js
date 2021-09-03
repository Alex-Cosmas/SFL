import Link from 'next/link'
export default function ProductNav() {
  return (
    <>
      <div className='bg-secondary text-primary'>
        <div className='container px-4 mx-auto'>
          <div className='flex justify-center py-3 space-x-4 '>
            <Link href='shop/cakes'>Specialty Pastries &amp; Baked Goods</Link>
            <Link href='shop/muffins'>Muffins &amp; Bread</Link>
          </div>
        </div>
      </div>
    </>
  )
}
