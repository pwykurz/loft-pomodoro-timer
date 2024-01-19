'use client'
import {useEffect, useMemo, useRef, type FC} from "react"

import ReactPlayer from "react-player"
import { type BaseReactPlayerProps } from 'react-player/base'
import {useRecoilState, useRecoilValue} from "recoil"

import YTPlayerList from "@/components/organisms/YTPlayer/YTPlayerList"
import {pomodoroTimerState} from "@/storage/PomodoroTimerState"
import currentVideoState from "@/storage/YouTubeState"

import styles from './YTPlayer.module.scss'

const YTPlayer:FC = () => {
  const isPlaying = useRecoilValue(pomodoroTimerState)
  const currentVideo = useRecoilState(currentVideoState)
  const playerRef = useRef<BaseReactPlayerProps>()

  useEffect(() => {
    console.log(playerRef.current)
    const ytPlayer = playerRef.current?.player?.player

    ytPlayer &&
    isPlaying ? ytPlayer?.unmute() : ytPlayer?.mute()
  }, [isPlaying])

  const ytUrl = useMemo(() => `https://www.youtube.com/watch?v=${currentVideo}`, [currentVideo])

  return (
    <>
      <YTPlayerList />
     <div className={styles.ytPlayerWrapper}>
       <ReactPlayer
         controls={false}
         height="100%"
         muted
         url={ytUrl}
         volume={1}
         width="100%"
         playing
         // @ts-expect-error ref is ok. Lint overreact.
         ref={playerRef}
       />
     </div>
    </>
   )
}

export default YTPlayer
