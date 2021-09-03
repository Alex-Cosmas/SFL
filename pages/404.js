import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFound() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      //   router.go(1)
      router.push('/')
    }, 3000)
  })
  return (
    <>
      <div>
        <h1>Opps not found......</h1>
        <p>That page cannot be found.....</p>
        <p>
          Redirecting you back to the Home Page
          {/* <Link href='/'>
            <a>HomePage</a>
          </Link> */}
        </p>
      </div>
    </>
  )
}

export default NotFound
