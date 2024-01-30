// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import useSound from "use-sound"

import rainSound from "@/sounds/rain.mp3"

const useRainSound = () => {
  const [play, { stop } ] = useSound(rainSound, {
    interrupt: true,
    volume: 1,
  })

  const playHandler = () => play()
  const stopHandler = () => stop()

  return [playHandler, stopHandler]
}

export default useRainSound
