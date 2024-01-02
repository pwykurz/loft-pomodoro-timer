import Image from 'next/image'
import PomodoroTimer from "@/components/molecules/PomodoroTimer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <PomodoroTimer initialMinutes={45} initialBreakTime={1}/>
      </div>
    </main>
  )
}
