'use client'
import {useEffect, useMemo, useRef, type FC} from "react"

import ReactPlayer from "react-player"
import { type BaseReactPlayerProps } from 'react-player/base'
import { useRecoilValue} from "recoil"

import YTPlayerList from "@/components/organisms/YTPlayer/YTPlayerList"
import {pomodoroTimerState} from "@/storage/PomodoroTimerState"
import currentVideoState from "@/storage/YouTubeState"

import styles from './YTPlayer.module.scss'

const YTPlayer:FC = () => {
  const isPlaying = useRecoilValue(pomodoroTimerState)
  const currentVideo = useRecoilValue(currentVideoState)
  const playerRef = useRef<BaseReactPlayerProps>()

  useEffect(() => {
    const ytPlayer = playerRef.current?.player?.player
    if (ytPlayer) {
      if(isPlaying){
        ytPlayer.unmute()
        ytPlayer.volume = 1
      } else {
        ytPlayer?.mute()
        ytPlayer.volume = 0
      }
    }
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
         playing
         // @ts-expect-error lint error
         ref={playerRef}
         url={ytUrl}
         volume={0}
         width="100%"
       />
      </div>
    </>
   )
}

export default YTPlayer
