"use client"

import * as React from "react"

import * as PrimitiveSlider from '@radix-ui/react-slider'

import {createTestIdObject} from "@/lib/testUtils"

import styles from './slider.module.scss'

export type Props = {
  defaultValue?: number[],
  min?: number,
  max?: number,
  step?: number,
  onChange: (value: number[]) => void
}

export const testId = createTestIdObject('Slider', {
  wrapper: 'wrapper',
  thumb: 'thumb'
})

const Slider:React.FC<Props> = ({
  defaultValue=[0],
  min=0,
  max=100,
  step=1,
  onChange
}) => (
  <PrimitiveSlider.Root
    className={styles.sliderRoot}
    data-testid={testId.wrapper}
    defaultValue={defaultValue}
    max={max}
    min={min}
    onValueChange={onChange}
    orientation={"vertical"}
    step={step}
  >
    <PrimitiveSlider.Track className={styles.sliderTrack}>
      <PrimitiveSlider.Range className={styles.sliderRange} />
    </PrimitiveSlider.Track>
    <PrimitiveSlider.Thumb className={styles.sliderThumb} data-testid={testId.thumb} />
  </PrimitiveSlider.Root>
)

export default Slider
