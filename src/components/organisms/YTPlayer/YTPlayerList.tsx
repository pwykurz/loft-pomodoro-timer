'use client'

import {useEffect, useState, type FC} from "react"

import {ArrowTopRightOnSquareIcon} from "@heroicons/react/20/solid"
import Image from 'next/image'
import {type BaseReactPlayerProps} from "react-player/base"
import {useRecoilState} from "recoil"

import YouTubeAPI from "@/api/ytPlayer/ytPlayer"
import {cn} from "@/lib/utils"
import currentVideoState from "@/storage/YouTubeState"


import styles from './YTPlayer.module.scss'

const YTPlayerList:FC = () => {
  const [open, setOpen] = useState(false)
  const [musicList, setMusicList] = useState<BaseReactPlayerProps>([])
  const [,setCurrentVideo] = useRecoilState(currentVideoState)

  const fetchChannels = () => YouTubeAPI.getStaticVideoList()

  useEffect(() => setMusicList(fetchChannels()), [])

  const openHandler = () => setOpen(prevState => !prevState)

  return (
    <div className={cn(styles.ytPlayerList, {[styles.ytPlayerListShow]: open})}>
      <div className={styles.tab} onClick={openHandler}>Choose music</div>
      <ul className={styles.ytList}>
        {musicList && musicList.length > 0 &&
        musicList.map((music: BaseReactPlayerProps, key: number) => {
          return (
          <li className={styles.item} key={key} onClick={() => {
            setCurrentVideo(music.key)}}>
            <div>
              <Image
                alt={music.title}
                height={54}
                src={music.thumbnailUrl}
                width={96}
              />
            </div>
            <div className={styles.titleGroup}>
              <h3 className={styles.title}>{music.title}</h3>
              <h4 className={styles.subtitle}>Channel name: {music.channelName}</h4>
              <a className={styles.link} href={`https://www.youtube.com/watch?v=${music.key}`} target="_blank">
                Go to youtube <ArrowTopRightOnSquareIcon/>
              </a>
            </div>
          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default YTPlayerList
