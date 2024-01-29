'use client'
import {type FC, useEffect, useRef, useState} from 'react'

import Countdown from "react-countdown"
import {useRecoilState} from "recoil"

import {PlayButton} from "@/components/molecules"
import {PomodoroActions, PomodoroRerender} from "@/components/organisms/PomodoroTimer/index"
import useAlarmSound from "@/hooks/useAlarmSound"
import PomodoroTimeLocalStorage from "@/lib/initialLocalStorage"
import {cn} from "@/lib/utils"
import {pomodoroTimesState, pomodoroTimerState} from "@/storage/PomodoroTimerState"

import styles from './PomodoroTimer.module.scss'

const MINUTE = 60 * 1000
const INIT_SESSION_COUNTER = 1

const PomodoroTimer: FC = () => {
  const [pomodoroTime, setPomodoroTime] = useRecoilState(pomodoroTimesState)
  const [, setIsPlaying] = useRecoilState(pomodoroTimerState)
  const [alarm] = useAlarmSound()

  const [date, setDate] = useState(Date.now() + pomodoroTime.workTime)
  const [sessionCounter, setSessionCounter] = useState(INIT_SESSION_COUNTER)

  const workMinutes = pomodoroTime.workTime * MINUTE
  const breakMinutes = pomodoroTime.breakTime * MINUTE
  const longBreakTime = pomodoroTime.longBreakTime * MINUTE

  const countdownRef = useRef<Countdown | null>(null)

  useEffect(() => {
    const pomodoroConfig = PomodoroTimeLocalStorage.getPomodoroTimeConfig()
    setPomodoroTime({
        workTime: pomodoroConfig.workTime,
        breakTime: pomodoroConfig.breakTime,
        longBreakTime: pomodoroConfig.longBreakTime,
        isBreak: pomodoroConfig.isBreak,
        breakAutostart: pomodoroConfig.breakAutostart
    })

  }, [])

  useEffect(() => getPomodoroTime(),[pomodoroTime])

  const setBreak = (isBreak: boolean) =>
    setPomodoroTime(prevState =>
      { return {...prevState, isBreak: isBreak}})

  const breakHandler = (skipBreak = false) => {
    if (skipBreak) {
      setIsPlaying(false)
      setBreak(false)
      return
    } else if (pomodoroTime.isBreak) {
      onPomodoroTimer()
      setIsPlaying(true)
      setBreak(false)
      return
    }

    setIsPlaying(false)
    setBreak(true)
  }

  const getPomodoroTime = () => {
    if (pomodoroTime.isBreak && sessionCounter % 4 === 0) return setDate( Date.now() + longBreakTime)
    if (pomodoroTime.isBreak) return setDate(Date.now() + breakMinutes)
    return setDate(Date.now() + workMinutes)
  }

  const start = () => countdownRef && countdownRef.current?.start()
  const stop = () => countdownRef && countdownRef.current?.stop()
  const pause = () => countdownRef && countdownRef.current?.pause()
  const isStopped = () => countdownRef && countdownRef.current?.isStopped()
  const isPaused = () => countdownRef && countdownRef.current?.isPaused()

  const onComplete = () => {
    alarm()
    stop()
    setIsPlaying(false)
    setPomodoroTime(prevState => {
      prevState.isBreak && onNextSession()
      return {...pomodoroTime, isBreak: !prevState.isBreak}
    })
  }

  const onReset = () => {
    stop()
    breakHandler(true)
    setSessionCounter(() => INIT_SESSION_COUNTER)
  }

  const onNextSession = () => {
    stop()
    breakHandler(true)
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
    <div className={cn(styles.pomodoroWrapper)}>
      <hgroup>
        <h1>{pomodoroTime.isBreak ? 'Break' : 'Focus'} time</h1>
        <h2>Session: {sessionCounter}</h2>
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
