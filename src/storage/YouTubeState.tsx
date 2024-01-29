import {atom} from "recoil"

const DEFAULT_VIDEO = '6jKDMA6rLpY'

const currentVideoState = atom({
  key: 'currentVideo',
  default: DEFAULT_VIDEO
})

export default currentVideoState
