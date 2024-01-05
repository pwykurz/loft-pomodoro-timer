'use client'
import {type FC, useRef, useState} from 'react'

import Countdown from "react-countdown"

import PlayButton from "@/components/molecules/PlayButton"
import PomodoroCountdown from "@/components/molecules/PomodoroTimer/PomodoroCountdown"
import PomodoroRerender from "@/components/molecules/PomodoroTimer/PomodoroRerender"

const MINUTE = 60 * 1000

export type Props = {
  initialMinutes: number,
  initialBreakTime: number
  initialLongBreakTime: number
}

const PomodoroTimer: FC<Props> = ({initialMinutes, initialBreakTime, initialLongBreakTime}) => {
  const [isBreak, setIsBreak] = useState(false)
  const [sessionCounter, setSessionCounter] = useState(1)

  const workMinutes = initialMinutes * MINUTE
  const breakMinutes = initialBreakTime * MINUTE
  const longBreakTime = initialLongBreakTime * MINUTE

  const countdownRef = useRef<Countdown>(null)

  const pomodoroTime = () => {
    if (isBreak && sessionCounter === 4) return Date.now() + longBreakTime
    if(isBreak) return Date.now() + breakMinutes
    return Date.now() + workMinutes
  }

  const start = () => countdownRef && countdownRef.current?.start()

  const pause = () => countdownRef && countdownRef.current?.pause()

  const isStopped = () => countdownRef && countdownRef.current?.isStopped()

  const isPaused = () => countdownRef && countdownRef.current?.isPaused()

  const onComplete = () => setIsBreak(prevState => !prevState)

  const onReset = () => {
    countdownRef && countdownRef.current?.stop()
    setSessionCounter(() => 0)
  }

  const onNextSession = () => {
    pause()
    setIsBreak(() => false)
    setSessionCounter(prevState => prevState + 1)
  }

  const onPomodoroTimer = () => {
    if (isStopped()) {
      start()
      return
    }
    isPaused() ? start() : pause()
  }

  return (
    <div className="pomodoro-timer">
      <h1>Work Timer</h1>
      <h2>Session counter: {sessionCounter}</h2>


      <PomodoroCountdown />
      <div className="timer-buttons">
        <PlayButton onChange={onPomodoroTimer}/>
        <button onClick={onReset}>reset</button>
        <button onClick={onNextSession}>Next session</button>
      </div>
    </div>
  )
}

export default PomodoroTimer
