'use client'
import {type FC} from "react"

import {useRecoilState} from "recoil"

import {createTestIdObject} from "@/lib/testUtils"
import {cn} from "@/lib/utils"
import { pomodoroTimerState } from "@/storage/PomodoroTimerState"

import styles from './PlayButton.module.scss'

export type Props = {
  onChange: () => void
}

export const testId = createTestIdObject('PlayButton', {
  button: 'button',
})

const PlayButton:FC<Props> = ({onChange})  => {
  const [isPlaying, setIsPlaying] = useRecoilState(pomodoroTimerState)

  const onClick = () => {
    setIsPlaying(prevState => !prevState)
    onChange()
  }

  return (
    <div className={cn(styles.playpause, 'my-4')} data-testid={testId.button}>
      <input checked={isPlaying} id="playpause"  name="check" readOnly type="checkbox"/>
      <label htmlFor="playpause" onClick={onClick} tabIndex={1}/>
    </div>
  )
}
export default PlayButton
