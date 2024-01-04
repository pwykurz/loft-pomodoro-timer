'use client'
import {type FC, useRef, useState} from 'react'
import Countdown, {type CountdownApi} from "react-countdown"

import PlayButton from "@/components/molecules/PlayButton"
import PomodoroRerender from "@/components/molecules/PomodoroTimer/PomodoroRerender";

const MINUTE = 60 * 1000

export type Props = {
  initialMinutes: number,
  initialBreakTime: number
  initialLongBreakTime: number
}

const PomodoroTimer: FC<Props> = (props) => {
  const {initialMinutes, initialBreakTime, initialLongBreakTime} = props
  const [isBreak, setIsBreak] = useState(false)
  const [sessionCounter, setSessionCounter] = useState(4)

  const workMinutes = initialMinutes * MINUTE
  const breakMinutes = initialBreakTime * MINUTE
  const longBreakTime = initialLongBreakTime * MINUTE

  const countdownRef = useRef<CountdownApi | undefined>()

  const pomodoroTime = () => {
    if (isBreak && sessionCounter === 4) return Date.now() + longBreakTime
    if(isBreak) return Date.now() + breakMinutes
    return Date.now() + workMinutes
  }

  const start = () => countdownRef && countdownRef.current?.start()
  const pause = () => countdownRef && countdownRef.current?.pause()
  const reset = () => {
    countdownRef && countdownRef.current?.stop()
    setSessionCounter(() => 0)
  }
  const nextSession = () => {
    setIsBreak(() => false)
    setSessionCounter(prevState => prevState + 1)
  }
  const isStopped = () => countdownRef && countdownRef.current?.isStopped()
  const isPaused = () => countdownRef && countdownRef.current?.isPaused()

  const onComplete = () => setIsBreak(prevState => !prevState)

  const pomodoroTimerHandler = () => {
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
      <Countdown
        ref={countdownRef}
        autoStart={false}
        date={pomodoroTime()}
        onComplete={onComplete}
        renderer={PomodoroRerender}
      />
      <div className="timer-buttons">
        <PlayButton onClick={pomodoroTimerHandler}/>
        <button onClick={reset}>reset</button>
        <button onClick={nextSession}>Next session</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
