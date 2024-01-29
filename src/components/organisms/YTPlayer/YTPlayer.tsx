'use client'
import {useEffect, useMemo, useRef, type FC, useState} from "react"

import dynamic from "next/dynamic"
import ReactPlayer from "react-player"
import { type BaseReactPlayerProps } from 'react-player/base'
import { useRecoilValue} from "recoil"

import YTPlayerList from "@/components/organisms/YTPlayer/YTPlayerList"
import {pomodoroTimerState} from "@/storage/PomodoroTimerState"
import currentVideoState from "@/storage/YouTubeState"

import styles from './YTPlayer.module.scss'

const VideoPlayer = dynamic(() => import("@/components/molecules/VideoPlayer"), { ssr: false })

export type PlayerT =
  (BaseReactPlayerProps & ReactPlayer) | null


const YTPlayer:FC = () => {
  const isPlaying = useRecoilValue(pomodoroTimerState)
  const currentVideo = useRecoilValue(currentVideoState)
  const [ytPlayer, setYTPlayer] = useState<PlayerT>(null)
  const playerRef = useRef<PlayerT>(null)

  useEffect(() => {
    setYTPlayer(playerRef.current?.player?.player)
  }, [playerRef.current])

  useEffect(() => {
    if (ytPlayer) {
      if(isPlaying) {
        ytPlayer.unmute()
        ytPlayer.volume = 1
      } else {
        ytPlayer?.mute()
        ytPlayer.volume = 0
      }
    }
  }, [ytPlayer, isPlaying])

  const ytUrl = useMemo(() => `https://www.youtube.com/watch?v=${currentVideo}`, [currentVideo])

  return (
    <>
      <YTPlayerList />
      <div className={styles.ytPlayerWrapper}>
        <VideoPlayer playerRef={playerRef} ytUrl={ytUrl} />
      </div>
    </>
   )
}

export default YTPlayer
