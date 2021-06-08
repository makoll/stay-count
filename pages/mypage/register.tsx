import Head from 'next/head'
import { useCallback } from 'react'
import { useForm, UseFormRegisterReturn } from 'react-hook-form'

import styles from '~/styles/Register.module.css'
import { apiClient } from '~/utils/apiClient'

const RegisterContainer = () => {
  return <RegisterPresentation />
}

const RegisterPresentation = () => {
  const { register, handleSubmit } = useForm()
  const registerStay = useCallback(async (formValue) => {
    const count = Number(formValue.count ?? 0)
    const countryId = Number(formValue.countryId ?? 0)
    await apiClient.users._userId(1).stays.put({ body: { count, countryId } })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Register stay</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Register stay</h1>

        <div className={styles.contents}>
          <form onSubmit={handleSubmit(registerStay)}>
            <input type="number" {...register('count')} placeholder="count" />
            <Countries formRegister={register('countryId')} />
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  )
}

const Countries = ({ formRegister }: { formRegister: UseFormRegisterReturn }) => {
  return (
    <select {...formRegister}>
      <option value={1}>US</option>
      <option value={2}>JP</option>
    </select>
  )
}

export default RegisterContainer
