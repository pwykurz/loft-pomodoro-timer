'use client'
import {RecoilRoot} from "recoil"

import { PomodoroTimer } from "../components/organisms/PomodoroTimer"

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <PomodoroTimer />
      </main>
    </RecoilRoot>
  )
}
