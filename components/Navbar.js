import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <h1>Some random list</h1>
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
