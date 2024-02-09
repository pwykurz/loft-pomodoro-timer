import {atom} from "recoil"

const DEFAULT_VIDEO = 'SH73CfL3oUA'

export const currentVideoState = atom({
  key: 'currentVideo',
  default: DEFAULT_VIDEO
})

export const videoPlayerConfig = atom({
  key: 'playerConfig',
  default: {
    volume: 0.2
  }
})
