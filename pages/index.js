
import HomePage from '@component/src/component/home/HomePage'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {

  return (
    <>
      <HomePage/>
    </>
  )
}
