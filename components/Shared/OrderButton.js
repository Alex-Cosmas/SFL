export default function OrderButton({ buttonState }) {
  return (
    <>
      <button className='w-full px-4 py-4 mt-3 font-bold rounded shadow bg-secondary text-beige hover:text-secondary hover:bg-primary'>
        {buttonState}
      </button>
    </>
  )
}
