// pages/_app.tsx

import type { AppProps } from 'next/app'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import { UserProvider } from '@/context/userContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'College Confession',
    description: '',
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
        </>
    )
}

export default MyApp
