export default function Slug({ ban }) {
  return (
    <div>
      <h1>Name: {ban.name}</h1>
      <h3>Username: {ban.username}</h3>
      <p>Email: {ban.email} </p>
      <p>Website: {ban.website} </p>
      <p>City: {ban.address.city} </p>
      <p>Phone: {ban.phone} </p>
    </div>
  )
}

// STATIC PATHS
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  const paths = data.map((ban) => {
    return {
      params: { id: ban.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()

  return {
    props: { ban: data },
  }
}
