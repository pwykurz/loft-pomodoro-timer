'use client';
import { FC } from "react";

import styles from './PlayButton.module.scss'

export type Props = {
  state: boolean
  onClick: () => void
}
const PlayButton:FC<Props> = ({onClick, state})  => {
  return (
    <div className={styles.playpause}>
      <input id="playpause" type="checkbox"  name="check" checked={!state} readOnly/>
      <label htmlFor="playpause" tabIndex={1} onClick={onClick}/>
    </div>
  );
}

export default PlayButton
