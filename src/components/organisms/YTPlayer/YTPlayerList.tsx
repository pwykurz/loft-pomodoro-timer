'use client'
import {useEffect, useState, type FC, useRef} from "react"

import {ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid"
import Image from 'next/image'
import {type BaseReactPlayerProps} from "react-player/base"
import {useRecoilState} from "recoil"

import YouTubeAPI from "@/api/ytPlayer/ytPlayer"
import useClickOutside from "@/hooks/useClickOutside"
import {cn} from "@/lib/utils"
import { currentVideoState } from "@/storage/YouTubeState"

import styles from './YTPlayer.module.scss'

const YTPlayerList:FC = () => {
  const [open, setOpen] = useState(false)
  const [musicList, setMusicList] = useState<BaseReactPlayerProps>([])
  const [,setCurrentVideo] = useRecoilState(currentVideoState)
  const listRef = useRef(null)

  const isClickedOutside = useClickOutside(listRef)

  useEffect(() => {
    isClickedOutside && setOpen(false)
  }, [isClickedOutside])

  const fetchChannels = () => YouTubeAPI.getStaticVideoList()

  useEffect(() => setMusicList(fetchChannels()), [])

  const openHandler = () => setOpen(prevState => !prevState)
  const chooseMusicHandler = (key: string) => {
    setCurrentVideo(key)
    openHandler()
  }

  return (
    <div className={cn(styles.ytPlayerList, {[styles.ytPlayerListShow]: open})} ref={listRef}>
      <div className={styles.tab} onClick={openHandler}>Choose music</div>
      <ul className={styles.ytList}>
        {musicList && musicList.length > 0 &&
        musicList.map((music: BaseReactPlayerProps) => {
          return (
          <li className={styles.item} key={music.key} onClick={() => chooseMusicHandler(music.key)}>
            <span>
              <Image
                alt={music.title}
                height={54}
                src={music.thumbnailUrl}
                width={96}
              />
            </span>
            <span>
              <h3 className={styles.title}>{music.title}</h3>
              <h4 className={styles.subtitle}>Channel name: {music.channelName}</h4>
              <a className={styles.link} href={`https://www.youtube.com/watch?v=${music.key}`} target="_blank">
                Go to youtube <ArrowTopRightOnSquareIcon/>
              </a>
            </span>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default YTPlayerList
