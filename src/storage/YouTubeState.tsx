import {atom} from "recoil"

const DEFAULT_VIDEO = '6jKDMA6rLpY'

export const currentVideoState = atom({
  key: 'currentVideo',
  default: DEFAULT_VIDEO
})

export const videoPlayerConfig = atom({
  key: 'playerConfig',
  default: {
    volume: 0
  }
})
