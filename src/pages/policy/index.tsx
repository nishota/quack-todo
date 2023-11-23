import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Policy() {
  return (
    <>
    <Head>
      <title>Policy</title>
    </Head>
    <main
      className={`items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className='text-2xl'>Policy</h1>
        <p>以下のこのポリシーを遵守します</p>
        <ul className="list-disc list-inside">
          <li>TODO: ポリシーの内容</li>
          <li>hogehoge</li>
          <li>hugahuga</li>
        </ul>
      </div>
    </main>
    </>
  )
}