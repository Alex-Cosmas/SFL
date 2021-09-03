import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <div>
        <Link href='/'>
          <a>
            {/* Logo */}
            <Image
              src='/MDF Kenya Logo-01.svg'
              alt='HeroBg'
              layout='fill'
              objectFit='contain'
            />
          </a>
        </Link>
      </div>
    </>
  )
}
