'use client'
import { memo, useEffect, useMemo, useRef, useState, type FC } from 'react'

import dynamic from 'next/dynamic'
import ReactPlayer from 'react-player'
import { type BaseReactPlayerProps } from 'react-player/base'
import { useRecoilValue } from 'recoil'

import {
  pomodoroIsBreakState,
  pomodoroIsPlayingState,
} from '@/storage/PomodoroTimerState'
import { currentVideoState, videoPlayerConfig } from '@/storage/YouTubeState'

import styles from './YTPlayer.module.scss'

const VideoPlayer = dynamic(
  () => import('@/components/molecules/VideoPlayer'),
  { ssr: false }
)

export type PlayerT = (BaseReactPlayerProps & ReactPlayer) | null

const YTPlayer: FC = () => {
  const isPlaying = useRecoilValue(pomodoroIsPlayingState)
  const isBreak = useRecoilValue(pomodoroIsBreakState)
  const currentVideo = useRecoilValue(currentVideoState)
  const playerConfig = useRecoilValue(videoPlayerConfig)
  const [ytPlayer, setYTPlayer] = useState<PlayerT>(null)
  const playerRef = useRef<PlayerT>(null)

  useEffect(
    () => setYTPlayer(playerRef.current?.player?.player),
    [playerRef.current]
  )

  useEffect(() => {
    if (ytPlayer && isBreak) {
      ytPlayer.mute()
      return
    }

    if (ytPlayer) {
      if (isPlaying) {
        ytPlayer.unmute()
        return
      }
      ytPlayer.mute()
    }
  }, [ytPlayer, isPlaying])

  const ytUrl = useMemo(
    () => `https://www.youtube.com/watch?v=${currentVideo}`,
    [currentVideo]
  )

  return (
    <div className={styles.ytPlayerWrapper}>
      <VideoPlayer
        playerRef={playerRef}
        volume={playerConfig.volume}
        ytUrl={ytUrl}
      />
    </div>
  )
}

export default memo(YTPlayer)
