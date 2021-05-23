import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className=''>
      <h1>HomePage</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti
        vitae ut alias. Quos atque, quis incidunt obcaecati optio illo eligendi
        sed assumenda. Odio voluptatum nihil, tempore voluptates nostrum,
        reprehenderit totam fuga eveniet doloremque officiis quam enim vel,
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti
        vitae ut alias. Quos atque, quis incidunt obcaecati optio illo eligendi
        sed assumenda. Odio voluptatum nihil, tempore voluptates nostrum,
        reprehenderit totam fuga eveniet doloremque officiis quam enim vel,
      </p>
      <Link href='/ninjas'>
        <a>See that List</a>
      </Link>
    </div>
  )
}
