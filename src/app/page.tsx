'use client'
import {Suspense} from "react";
import {RecoilRoot} from "recoil"

import PomodoroTimer from "@/components/molecules/PomodoroTimer"

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Suspense fallback={<div>loading...</div>}>
            <PomodoroTimer />
          </Suspense>
      </main>
    </RecoilRoot>
  )
}
