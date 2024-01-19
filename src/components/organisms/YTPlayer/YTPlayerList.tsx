'use client'

import {useEffect, useState, type FC} from "react"

import Image from 'next/image'
import {type BaseReactPlayerProps} from "react-player/base"
import {useRecoilState} from "recoil"

import YouTubeAPI from "@/api/ytPlayer/ytPlayer"
import currentVideoState from "@/storage/YouTubeState"

import styles from './YTPlayer.module.scss'

const YTPlayerList:FC = () => {
  const [musicList, setMusicList] = useState<BaseReactPlayerProps>([])
  const [,setCurrentVideo] = useRecoilState(currentVideoState)

  const fetchChannels = async () => await YouTubeAPI.getVideoList()

  useEffect(() => {
    fetchChannels().then(r => setMusicList(r.items))
  }, [])

  useEffect(() => {
    console.log(musicList)
  }, [musicList])

  return (
    <div className={styles.ytPlayerList}>
      <ul>
        {musicList && musicList.length > 0 &&
        musicList.map((music: BaseReactPlayerProps, key: number) => {
          return (
          <li className={styles.item} key={key} onClick={() => {
            setCurrentVideo(music.id.videoId)}}>
            <Image
              alt={music.snippet.title}
              height={music.snippet.thumbnails.medium.height}
              src={music.snippet.thumbnails.medium.url}
              width={music.snippet.thumbnails.medium.width}
            />
            <span className={styles.title}>{music.snippet.title}</span>
          </li>
        )})}
      </ul>
    </div>
  )
}

export default YTPlayerList
