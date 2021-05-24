import Head from 'next/head'
import styles from '../../styles/Bane.module.css'

import Link from 'next/link'

export default function index({ bane }) {
  return (
    <>
      <Head>
        <title>Bane's List | Content</title>
        <meta name='keywords' content='content' />
      </Head>
      <div>
        <h1>root path for bane folder</h1>

        {bane.map((ban) => (
          <Link href={`/bane/${ban.id}`} key={ban.id}>
            <a className={styles.sin}>
              <h3>{ban.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      bane: data,
    },
  }
}
