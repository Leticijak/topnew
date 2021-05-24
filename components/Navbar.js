import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image width={40} height={40} src='/logo2.png' alt='' />
        <h1>Buy Chia Plots</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/bane'>
        <a>That List</a>
      </Link>
    </nav>
  )
}
