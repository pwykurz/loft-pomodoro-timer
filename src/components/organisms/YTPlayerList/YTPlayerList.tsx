'use client'
import { useEffect, useState, type FC } from 'react'

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { type BaseReactPlayerProps } from 'react-player/base'
import { useRecoilState } from 'recoil'

import YouTubeAPI from '@/api/ytPlayer/ytPlayer'
import { currentVideoState } from '@/storage/YouTubeState'

import styles from './YTPlayerList.module.scss'

const YTPlayerList: FC = () => {
  const [musicList, setMusicList] = useState<BaseReactPlayerProps>([])
  const [, setCurrentVideo] = useRecoilState(currentVideoState)

  const fetchChannels = () => YouTubeAPI.getStaticVideoList()

  useEffect(() => setMusicList(fetchChannels()), [])

  const chooseMusicHandler = (key: string) => setCurrentVideo(key)

  return (
    <ul className={styles.ytList}>
      {musicList &&
        musicList.length > 0 &&
        musicList.map((music: BaseReactPlayerProps) => {
          return (
            <li
              className={styles.item}
              key={music.key}
              onClick={() => chooseMusicHandler(music.key)}
            >
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
                <h4 className={styles.subtitle}>
                  Channel name: {music.channelName}
                </h4>
                <a
                  className={styles.link}
                  href={`https://www.youtube.com/watch?v=${music.key}`}
                  target='_blank'
                >
                  Go to youtube <ArrowTopRightOnSquareIcon />
                </a>
              </span>
            </li>
          )
        })}
    </ul>
  )
}

export default YTPlayerList
