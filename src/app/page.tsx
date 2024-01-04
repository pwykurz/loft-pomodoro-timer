'use client'
import PomodoroTimer from "@/components/molecules/PomodoroTimer";
import {RecoilRoot} from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <PomodoroTimer initialMinutes={1} initialBreakTime={5} initialLongBreakTime={15} />
      </div>
    </main>
    </RecoilRoot>
  )
}
