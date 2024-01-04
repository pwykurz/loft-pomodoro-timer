'use client';
import {FC, useState} from "react";

import styles from './PlayButton.module.scss'

export type Props = {
  showPlayButoon?: boolean
  onClick: () => void
}
const PlayButton:FC<Props> = ({onClick, showPlayButoon = true})  => {
  return (
    <div className={styles.playpause}>
      <input id="playpause" type="checkbox"  name="check" checked={showPlayButoon} readOnly/>
      <label htmlFor="playpause" tabIndex={1} onClick={onClick}/>
    </div>
  );
}

export default PlayButton
