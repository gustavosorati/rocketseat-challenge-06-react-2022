import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google';
import { SessionProvider } from "next-auth/react"
import { GlobalStyles } from '@/styles/globals';

const nunito = Nunito({ 
  weight: ['400', '700'],
  subsets: ['latin']
})

GlobalStyles()

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}: AppProps) {
  return (
    <main className={`${nunito.className}`}>
      <SessionProvider session={session}>
        <Component {...pageProps} />

      </SessionProvider>
    </main>
  )
}
