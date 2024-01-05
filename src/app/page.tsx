'use client'
import {RecoilRoot} from "recoil"

import PomodoroTimer from "@/components/molecules/PomodoroTimer"

export default function Home() {
  return (
    <RecoilRoot>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          <PomodoroTimer initialBreakTime={5} initialLongBreakTime={15} initialMinutes={1} />
        </div>
      </main>
    </RecoilRoot>
  )
}
