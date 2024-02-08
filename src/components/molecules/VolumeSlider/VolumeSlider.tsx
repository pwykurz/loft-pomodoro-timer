import {FC} from "react"

import {SpeakerWaveIcon, SpeakerXMarkIcon} from "@heroicons/react/16/solid"
import {useRecoilState} from "recoil"

import Slider from "@/components/ui/slider"
import {createTestIdObject} from "@/lib/testUtils"
import {videoPlayerConfig} from "@/storage/YouTubeState"

import styles from './VolumeSlider.module.scss'

export type Props = {
  defaultValue?: number[],
  min?: number,
  max?: number,
  step?: number,
}

export const testId = createTestIdObject('VolumeSlider', {
  wrapper: 'wrapper',
})

const VolumeSlider:FC<Props> = ({
  min=0,
  max=1,
  step=0.01,
}) => {
  const [playerConfig, setPlayerConfig] = useRecoilState(videoPlayerConfig)
  const onVolumeChange = (value: number[]) => {
    setPlayerConfig({volume: value[0]})
  }

  return (
    <div className={styles.wrapper} data-testid={testId.wrapper}>
      <SpeakerWaveIcon/>
      <Slider defaultValue={[playerConfig.volume]}
              max={max}
              min={min}
              onChange={onVolumeChange}
              step={step}/>
      <SpeakerXMarkIcon/>
    </div>
  )
}

export default VolumeSlider
