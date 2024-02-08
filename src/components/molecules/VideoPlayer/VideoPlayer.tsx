import {memo, type FC, type RefObject} from "react"

import ReactPlayer from "react-player"
import type {BaseReactPlayerProps} from "react-player/base"

export type Props = {
  playerRef: RefObject<BaseReactPlayerProps & ReactPlayer>,
  ytUrl: string,
  playerProps?: BaseReactPlayerProps,
  volume: number
}
const VideoPlayer: FC<Props> = ({
  playerRef,
  ytUrl,
  playerProps={},
  volume=0.2
}) => <ReactPlayer
      controls={false}
      height="100%"
      muted
      {...playerProps}
      loop
      playing
      ref={playerRef}
      url={ytUrl}
      volume={volume}
      width="100%"
    />

export default memo(VideoPlayer)
