'use client';
import {type FC, useState, useEffect, useRef} from 'react';
import PlayButton from "@/components/molecules/PlayButton";
import Countdown, {calcTimeDelta} from "react-countdown";
import {Simulate} from "react-dom/test-utils";
import pause = Simulate.pause;
import {set} from "immutable";

const MINUTE = 60 * 1000

export type Props = {
  initialMinutes: number
  initialBreakTime: number
}
const PomodoroTimer: FC<Props> = ({initialMinutes, initialBreakTime}) => {
  const [isActive, setIsActive] = useState(false)
  const [countdownAPI, setCountdownAPI] = useState(null)
  const minutes = initialMinutes * MINUTE

  const countdownRef = useRef()

  useEffect(() => {
    if (countdownRef && countdownRef.current) {
      setCountdownAPI(countdownRef.current.api)
    }
  }, [countdownRef]);

  const onComplete = () => console.log('completed')

  const start = () => {
    setIsActive(() => true)
    countdownAPI?.start()
  }

  const pause = () => {
    setIsActive(() => false)
    countdownAPI?.pause()
  }

  const restart = () => {
    countdownAPI?.stop()
  }

  const pomodoroTimerHandler = () => {
    isActive ? pause() : start()
  }

  return (
    <div className="pomodoro-timer">
      <h1>Work Timer</h1>
      <Countdown ref={countdownRef} date={Date.now() + minutes} autoStart={false} onComplete={onComplete} />
      <div className="timer-buttons">
        <PlayButton onClick={pomodoroTimerHandler}  state={isActive} />
        <button onClick={restart}>Reset</button>
      </div>
    </div>
  );
};

export default PomodoroTimer;
