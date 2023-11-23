import { Inter } from 'next/font/google'
import QuackAuthenticator from '@/components/quack-authenticator'
import HeaderComponent from '@/ui-components/HeaderComponent'
import { Text } from "@aws-amplify/ui-react";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <QuackAuthenticator>
    <>
      <Head>
        <title>This is page head</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <HeaderComponent />
        <Text>Hogehoge</Text>
      </main>
    </>
    // </QuackAuthenticator>
  )
}
