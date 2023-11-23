import { Inter } from 'next/font/google'
import QuackAuthenticator from '@/components/quack-authenticator'
import HeaderComponent from '@/ui-components/HeaderComponent'
import { Text } from "@aws-amplify/ui-react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <QuackAuthenticator>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <HeaderComponent/>
        <Text>Hogehoge</Text>
      </main>
    // </QuackAuthenticator>
  )
}
