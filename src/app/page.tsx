'use client'
import { Roboto_Flex } from 'next/font/google'
import {RecoilRoot} from "recoil"

import AudioPlayer from "@/components/molecules/AudioPlayer/AudioPlayer"
import YTPlayer from "@/components/organisms/YTPlayer"

import { PomodoroTimer } from "../components/organisms/PomodoroTimer"

const robotoFlex = Roboto_Flex({subsets: ['latin']})
export default function Home() {
  return (
    <RecoilRoot>
      <main className={`${robotoFlex.className} flex min-h-screen flex-col items-center justify-between p-24`}>
        <AudioPlayer />
        <PomodoroTimer />
        <YTPlayer />
      </main>
    </RecoilRoot>
  )
}
