'use client'
import {type FC, useEffect, useLayoutEffect, useRef, useState} from 'react'

import Countdown from "react-countdown"
import {useRecoilState} from "recoil"

import {PlayButton} from "@/components/molecules"
import {PomodoroActions, PomodoroRerender} from "@/components/organisms/PomodoroTimer/index"
import PomodoroTimeLocalStorage from "@/lib/initialLocalStorage"
import {pomodoroTimesState, pomodoroTimerState} from "@/storage/PomodoroTimerState"

import styles from './PomodoroTimer.module.scss'

const MINUTE = 60 * 1000
const INIT_SESSION_COUNTER = 1

const PomodoroTimer: FC = () => {
  const [initialTimes, setInitialTimes] = useRecoilState(pomodoroTimesState)
  const [, setIsPlaying] = useRecoilState(pomodoroTimerState)


  const [date, setDate] = useState(Date.now() + initialTimes.initialWorkTime)
  const [isBreak, setIsBreak] = useState(false)
  const [sessionCounter, setSessionCounter] = useState(INIT_SESSION_COUNTER)

  const workMinutes = initialTimes.initialWorkTime * MINUTE
  const breakMinutes = initialTimes.initialBreakTime * MINUTE
  const longBreakTime = initialTimes.initialLongBreakTime * MINUTE

  const countdownRef = useRef<Countdown | null>(null)

  useLayoutEffect(() => {
    const pomodoroTimeInstance = new PomodoroTimeLocalStorage
    const pomodoroTimes = pomodoroTimeInstance.setPomodoroTimeFromLocalStorage()

    setInitialTimes({
        'initialWorkTime': pomodoroTimes.workTime,
        'initialBreakTime': pomodoroTimes.breakTime,
        'initialLongBreakTime': pomodoroTimes.longBreakTime
    })
  }, [])

  useEffect(() => pomodoroTime(),[isBreak, initialTimes])

  const pomodoroTime = () => {
    if (isBreak && sessionCounter === 4) return setDate( Date.now() + longBreakTime)
    if (isBreak) return setDate(Date.now() + breakMinutes)
    return setDate(Date.now() + workMinutes)
  }

  const start = () => countdownRef && countdownRef.current?.start()

  const stop = () => {
    countdownRef && countdownRef.current?.stop()
    setIsPlaying(false)
  }

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
    setSessionCounter(() => INIT_SESSION_COUNTER)
    setIsPlaying(false)
  }

  const onNextSession = () => {
    stop()
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
    <div className={styles.pomodoroWrapper}>
      <hgroup>
        <h1>{isBreak ? 'Break' : 'Focus'} time</h1>
        <h2>Session counter: {sessionCounter}</h2>
      </hgroup>
      <div>
        <Countdown
            autoStart={false}
            date={date}
            onComplete={onComplete}
            ref={countdownRef}
            renderer={PomodoroRerender}
        />
        <PlayButton onChange={onPomodoroTimer}/>
      </div>
      <PomodoroActions
        onNextSession={onNextSession}
        onReset={onReset}
      />
    </div>
  )
}

export default PomodoroTimer
