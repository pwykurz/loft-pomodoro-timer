import Countdown from "react-countdown"

import PomodoroRerender from "@/components/molecules/PomodoroTimer/PomodoroRerender"

const PomodoroCountdown = ({ref, pomodoroTime, onComplete, }) => {
  return (
    <Countdown
      autoStart={false}
      date={pomodoroTime()}
      onComplete={onComplete}
      ref={ref}
      renderer={PomodoroRerender}
    />
  )
}

export default PomodoroCountdown
