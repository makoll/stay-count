import '~/styles/globals.css'

import * as Sentry from '@sentry/react'
import type { AppProps } from 'next/app'

const DSN = 'https://7dc9a4361a1d4a2da97d414c4bc0470d@o855798.ingest.sentry.io/5819897'
Sentry.init({
  dsn: DSN,
  tracesSampleRate: 1.0
})

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
