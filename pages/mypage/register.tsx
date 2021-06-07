// import useAspidaSWR from '@aspida/swr'
import Head from 'next/head'
import { useForm } from 'react-hook-form'

import styles from '~/styles/Register.module.css'
// import { apiClient } from '~/utils/apiClient'

const RegisterContainer = () => {
  return <RegisterPresentation />
}

const RegisterPresentation = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: { [key: string]: number }) => alert(JSON.stringify(data))

  return (
    <div className={styles.container}>
      <Head>
        <title>Register stay</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Register stay</h1>

        <div className={styles.contents}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="number" {...register('count')} placeholder="count" />
            <Countries />
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  )
}

const Countries = () => {
  return (
    <select>
      <option value={1}>US</option>
      <option value={2}>JP</option>
    </select>
  )
}

export default RegisterContainer
