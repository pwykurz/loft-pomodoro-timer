import {type FC, type RefObject} from "react"

import ReactPlayer from "react-player"
import type {BaseReactPlayerProps} from "react-player/base"

export type Props = {
  playerRef: RefObject<BaseReactPlayerProps & ReactPlayer>,
  ytUrl: string,
  playerProps?: BaseReactPlayerProps
}
const VideoPlayer: FC<Props> = ({
  playerRef,
  ytUrl,
  playerProps={}
}) => {
  return (
    <ReactPlayer
      controls={false}
      height="100%"
      muted
      {...playerProps}
      loop
      playing
      ref={playerRef}
      url={ytUrl}
      volume={0}
      width="100%"
    />
  )
}

export default VideoPlayer
