'use client'
import {type FC, memo} from "react"

import {useRecoilState} from "recoil"

import {cn} from "@/lib/utils"
import { pomodoroTimerState } from "@/storage/PomodoroTimerState"

import styles from './PlayButton.module.scss'

export type Props = {
  onChange: () => void
}
const PlayButton:FC<Props> = ({onChange})  => {
  const [isPlaying, setIsPlaying] = useRecoilState(pomodoroTimerState)

  const onClick = () => {
    setIsPlaying(prevState => !prevState)
    onChange()
  }

  return (
    <div className={cn(styles.playpause, 'my-4')}>
      <input checked={isPlaying} id="playpause"  name="check" readOnly type="checkbox"/>
      <label htmlFor="playpause" onClick={onClick} tabIndex={1}/>
    </div>
  )
}
export default memo(PlayButton)
