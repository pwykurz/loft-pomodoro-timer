import type {FC} from "react";
import {zeroPad} from "react-countdown";

export type Props = {
  hours: number,
  minutes: number,
  seconds: number
}
const PomodoroRerender: FC<Props> = ({hours, minutes, seconds}) => {
  return (
    <div>
      <span>{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>
    </div>
  )
}

export default PomodoroRerender
