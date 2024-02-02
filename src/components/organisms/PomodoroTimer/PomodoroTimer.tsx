'use client'
import {type FC, useEffect, useRef, useState} from 'react'

import Countdown from "react-countdown"
import {useRecoilState} from "recoil"

import {BoxWrapper} from "@/components/atom"
import {PlayButton} from "@/components/molecules"
import {PomodoroActions, PomodoroRerender} from "@/components/organisms/PomodoroTimer/index"
import useAlarmSound from "@/hooks/useAlarmSound"
import useRainSound from "@/hooks/useRainSound"
import PomodoroTimeLocalStorage from "@/lib/initialLocalStorage"
import {pomodoroIsBreakState, pomodoroIsPlayingState, pomodoroTimerState} from "@/storage/PomodoroTimerState"


const MINUTE = 60 * 1000
const INIT_SESSION_COUNTER = 1

const PomodoroTimer: FC = () => {
  const [pomodoroTime, setPomodoroTime] = useRecoilState(pomodoroTimerState)
  const [, setIsPlaying] = useRecoilState(pomodoroIsPlayingState)
  const [isBreak, setIsBreak] = useRecoilState(pomodoroIsBreakState)
  const [alarmPlay] = useAlarmSound()
  const [rainPlay, rainStop] = useRainSound()

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
    })
  }, [])

  useEffect(() => getPomodoroTime()
  ,[pomodoroTime, isBreak, sessionCounter])

  const breakHandler = (skipBreak = false) => {
    if (skipBreak) {
      setIsBreak(false)
      setIsPlaying(false)
      return
    } else if (isBreak) {
      onPomodoroTimer()
      setIsBreak(false)
      setIsPlaying(true)
      return
    }
    setIsBreak(true)
    setIsPlaying(false)
  }

  const getPomodoroTime = () => {
    if (isBreak && sessionCounter % 4 === 0) return setDate( Date.now() + longBreakTime)
    if (isBreak) return setDate(Date.now() + breakMinutes)
    return setDate(Date.now() + workMinutes)
  }

  const start = () => countdownRef && countdownRef.current?.start()
  const stop = () => countdownRef && countdownRef.current?.stop()
  const pause = () => countdownRef && countdownRef.current?.pause()
  const isStopped = () => countdownRef && countdownRef.current?.isStopped()
  const isPaused = () => countdownRef && countdownRef.current?.isPaused()

  const onComplete = () => {
    alarmPlay()
    rainStop()
    setIsBreak(prevState => {
      prevState && onNextSession()
      !prevState && rainPlay()
      return !prevState
    })
    setIsPlaying(prevState => !prevState)
  }

  const onReset = () => {
    stop()
    breakHandler(true)
    setIsPlaying(false)
    setSessionCounter(() => INIT_SESSION_COUNTER)
  }

  const onNextSession = (isBreak = false) => {
    stop()
    isBreak && setIsBreak(false)
    setIsPlaying(false)
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
    <BoxWrapper>
      <hgroup>
        <h1>{isBreak ? 'Break' : 'Focus'} time</h1>
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
    </BoxWrapper>
  )
}

export default PomodoroTimer
