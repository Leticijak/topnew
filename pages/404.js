import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])
  return (
    <div className='error'>
      <h1>Ooops...</h1>
      <h2>Page not found</h2>
      <br />
      <br />
      <br />
      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
  )
}
