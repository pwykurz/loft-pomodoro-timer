'use client'
import Image from 'next/image'
import PomodoroTimer from "@/components/molecules/PomodoroTimer";

export default function Home() {
  // const [pomodoroIsActive, setIsActive] =
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <PomodoroTimer initialMinutes={1} initialBreakTime={5} initialLongBreakTime={15} />
      </div>
    </main>
  )
}
