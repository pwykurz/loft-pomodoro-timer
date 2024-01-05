import {atom} from "recoil"

const pomodoroTimerState = atom({
  key: 'isPlaying',
  default: false
})

export default pomodoroTimerState
