import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import Head from 'next/head'
// import FlyingEffect from '../components/FlyingEffect'
// import DrugTrail from '../components/DrugTrail'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
            <Head>
        {/* Add your viewport meta here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
      
      {/* <DrugTrail /> */}
      {/* <FlyingEffect /> */}
    </QueryClientProvider>
  )
}
