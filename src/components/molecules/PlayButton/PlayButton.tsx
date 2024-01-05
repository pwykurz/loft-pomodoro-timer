'use client'
import {type FC, memo} from "react"

import {useRecoilState} from "recoil"

import pomodoroTimerState from "@/storage/PomodoroTimerState"

import styles from './PlayButton.module.scss'

export type Props = {
  onChange: () => void
}
const PlayButton:FC<Props> = ({onChange})  => {
  const [isPlaying, setIsPlaying] = useRecoilState(pomodoroTimerState)

  const _onClick = () => {
    setIsPlaying(prevState => !prevState)
    onChange()
  }

  return (
    <div className={styles.playpause}>
      <input checked={isPlaying} id="playpause"  name="check" readOnly type="checkbox"/>
      <label htmlFor="playpause" onClick={_onClick} tabIndex={1}/>
    </div>
  )
}

export default memo(PlayButton)
