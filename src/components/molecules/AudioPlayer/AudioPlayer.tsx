'use client'

import ReactPlayer from "react-player"

const AudioPlayer = () => {
  return (
    <div style={{
      width: '1px',
      height: '1px',
      overflow: 'hidden'
    }}>
      <ReactPlayer
        config={{
          file: {
            forceAudio: true
          }
        }}
        playing
        url="https://www.youtube.com/watch?v=iNpXCzaWW1s"
        />
    </div>
  )
}

export default AudioPlayer
