'use client'
import {type FC, useEffect, useRef, useState} from 'react'
import {useRecoilState} from "recoil";

import Countdown from "react-countdown"

import PlayButton from "@/components/molecules/PlayButton"
import PomodoroRerender from "@/components/molecules/PomodoroTimer/PomodoroRerender"
import {pomodoroTimesState, pomodoroTimerState} from "@/storage/PomodoroTimerState";

import styles from './PomodoroTimer.module.scss'

const MINUTE = 60 * 1000

const PomodoroTimer: FC = () => {
  const [initialTimes] = useRecoilState(pomodoroTimesState)
  const [, setIsPlaying] = useRecoilState(pomodoroTimerState)

  const {initialTime, initialBreakTime, initialLongBreakTime} = initialTimes

  const [date, setDate] = useState(Date.now() + initialTime)
  const [isBreak, setIsBreak] = useState(false)
  const [sessionCounter, setSessionCounter] = useState(1)


  const workMinutes = initialTime * MINUTE
  const breakMinutes = initialBreakTime * MINUTE
  const longBreakTime = initialLongBreakTime * MINUTE

  const countdownRef = useRef<Countdown | null>(null)

  const pomodoroTime = () => {
    if (isBreak && sessionCounter === 4) return setDate( Date.now() + longBreakTime)
    if (isBreak) return setDate(Date.now() + breakMinutes)
    return setDate(Date.now() + workMinutes)
  }

  useEffect(() => pomodoroTime(),[isBreak])

  const start = () => countdownRef && countdownRef.current?.start()

  const pause = () => {
    countdownRef && countdownRef.current?.pause()
    setIsPlaying(false)
  }

  const isStopped = () => countdownRef && countdownRef.current?.isStopped()

  const isPaused = () => countdownRef && countdownRef.current?.isPaused()

  const onComplete = () => {
    setIsBreak(prevState => {
      if (prevState) onNextSession()
      return !prevState
    })
    setIsPlaying(false)
  }

  const onReset = () => {
    countdownRef && countdownRef.current?.stop()
    setSessionCounter(() => 0)
  }

  const onNextSession = () => {
    pause()
    setIsBreak(() => false)
    console.log(sessionCounter)
    setSessionCounter(prevState => prevState + 1)
  }

  const onPomodoroTimer = () => {
    if (isStopped()) {
      start()
      return
    }
    isPaused() ? start() : pause()
  }

  const settingsHandler = () => console.log('open modal with settings')

  return (
    <div className={styles.pomodoroWrapper}>
      <h1>{isBreak ? 'Break' : 'Focus'}  time</h1>
      <h2>Session counter: {sessionCounter}</h2>
      <Countdown
          autoStart={false}
          date={date}
          onComplete={onComplete}
          ref={countdownRef}
          renderer={PomodoroRerender}
      />
      <div className="timer-buttons">
        <PlayButton onChange={onPomodoroTimer}/>
        <button onClick={onReset}>Reset</button>
        <button onClick={onNextSession}>Next session</button>
        <button onClick={settingsHandler}>Settings</button>
      </div>
    </div>
  )
}

export default PomodoroTimer
