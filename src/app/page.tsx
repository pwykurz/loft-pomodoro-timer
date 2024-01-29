'use client'
import { Roboto_Flex } from 'next/font/google'
import {RecoilRoot} from "recoil"

import MainPage from "@/components/organisms/MainPage"
import YTPlayer from "@/components/organisms/YTPlayer"


const robotoFlex = Roboto_Flex({subsets: ['latin']})
export default function Home() {
  return (
    <RecoilRoot>
      <main className={`${robotoFlex.className} flex min-h-screen flex-col items-center justify-between p-24`}>
        <MainPage />
        <YTPlayer />
      </main>
    </RecoilRoot>
  )
}
