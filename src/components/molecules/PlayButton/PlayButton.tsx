'use client';
import {FC, useState} from "react";

import styles from './PlayButton.module.scss'

export type Props = {
  onClick: () => void
}
const PlayButton:FC<Props> = ({onClick})  => {
  const [isPlaying, setIsPlaing] = useState(false)

  const _onClick = () => {
    setIsPlaing(prevState => !prevState)
    onClick()
  }

  return (
    <div className={styles.playpause}>
      <input id="playpause" type="checkbox"  name="check" checked={isPlaying} readOnly/>
      <label htmlFor="playpause" tabIndex={1} onClick={_onClick}/>
    </div>
  );
}

export default PlayButton
