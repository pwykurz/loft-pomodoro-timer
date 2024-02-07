import {FC} from "react"

import {Slider} from "@/components/ui/slider"

import styles from './VolumeSlider.module.scss'

export type Props = {
  defaultValue: number[],
  min: number,
  max: number,
  step: number
}

const VolumeSlider:FC<Props> = ({defaultValue, min, max, step}) =>
  <div className={styles.wrapper}>
    icon
    <Slider
      className={styles.slider}
      defaultValue={defaultValue}
      max={max}
      min={min}
      orientation={"vertical"}
      step={step}
    />
    icon
  </div>

export default VolumeSlider
