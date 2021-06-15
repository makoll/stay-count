import Head from 'next/head'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import styles from '~/styles/Register.module.css'
import { apiClient } from '~/utils/apiClient'

const RegisterUserContainer = () => {
  return <RegisterUserPresentation />
}

type TFormValue = {
  firstName: string
  lastName: string
}

const RegisterUserPresentation = () => {
  const { register, handleSubmit } = useForm()
  const registerStay = useCallback(async (formValue: TFormValue) => {
    console.log(20, formValue)
    // await apiClient.users._userId(1).stays.put({ body: formValue })
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Register user</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Register user</h1>

        <div className={styles.contents}>
          <form onSubmit={handleSubmit(registerStay)}>
            <input type="string" {...register('firstName')} placeholder="first name" />
            <input type="string" {...register('lastName')} placeholder="last name" />
            <input type="submit" />
          </form>
        </div>
      </main>
    </div>
  )
}

export default RegisterUserContainer
