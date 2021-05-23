import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti
        vitae ut alias. Quos atque, quis incidunt obcaecati optio illo eligendi
        sed assumenda. Odio voluptatum nihil, tempore voluptates nostrum,
        reprehenderit totam fuga eveniet doloremque officiis quam enim vel,
      </p>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos corrupti
        vitae ut alias. Quos atque, quis incidunt obcaecati optio illo eligendi
        sed assumenda. Odio voluptatum nihil, tempore voluptates nostrum,
        reprehenderit totam fuga eveniet doloremque officiis quam enim vel,
      </p>
      <Link href='/bane'>
        <a className={styles.btn}>See that List</a>
      </Link>
    </div>
  )
}
