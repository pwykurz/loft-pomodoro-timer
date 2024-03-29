// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import useSound from "use-sound"

import alarmSound from "@/sounds/alarm.mp3"

const useAlarmSound = () => {
  const [play, { stop }] = useSound(alarmSound, {
    interrupt: true,
    volume: 1,
  })

  const playHandler = () => play()
  const stopHandler = () => stop()

  return [playHandler, stopHandler]
}

export default useAlarmSound
