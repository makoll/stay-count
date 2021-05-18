import useAspidaSWR from '@aspida/swr'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Stay, User } from '~/server/types'
import styles from '~/styles/User.module.css'
import { apiClient } from '~/utils/apiClient'

const MapView = dynamic(() => import('~/components/MapView'), { ssr: false })

const UserContainer = () => {
  const router = useRouter()
  const queryUserId = Number(router.query.id as string)

  // const { data: stays, error } = useAspidaSWR(apiClient.stays, {
  //   query: { id: queryUserId }
  // })

  const { data: user, error: error2 } = useAspidaSWR(apiClient.users._userId(queryUserId))

  // if (error || error2) return <div>failed to load</div>
  // if (!stays || !user) return <div>loading...</div>

  if (error2) return <div>failed to load</div>
  if (!user) return <div>loading...</div>

  const stays = [
    { name: 'US', count: 3 },
    { name: 'JP', count: 1 }
  ]

  return <UserPresentation user={user} stays={stays ?? []} />
}

const UserPresentation = ({ user, stays }: { user: User; stays: Stay[] }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`${user.name}'s stayed countries`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{`${user.name}'s stayed countries`}</h1>

        <div className={styles.contents}>
          <MapView stays={stays} />
          <Countries stays={stays} />
        </div>
      </main>
    </div>
  )
}

const Countries = ({ stays }: { stays: Stay[] }) => {
  return (
    <table className={styles.countries}>
      <thead>
        <tr className={styles.countriesHeader}>
          <th>Name</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {stays.map((stayed, i) => (
          <Country stayed={stayed} key={i} />
        ))}
      </tbody>
    </table>
  )
}

const Country = ({ stayed }: { stayed: Stay }) => {
  return (
    <tr>
      <td>{stayed.name}</td>
      <td>{stayed.count}</td>
    </tr>
  )
}
export default UserContainer
