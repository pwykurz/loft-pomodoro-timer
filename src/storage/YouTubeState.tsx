import {atom} from "recoil"

const DEFAULT_VIDEO = 'n--SX54AUZU'

const currentVideoState = atom({
  key: 'currentVideo',
  default: DEFAULT_VIDEO
})

export default currentVideoState
