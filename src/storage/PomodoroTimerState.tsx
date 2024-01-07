import {atom, RecoilState} from "recoil"

export type pomodoroTimesStateT = {
  'initialTime': number,
  'initialBreakTime': number,
  'initialLongBreakTime': number
}

export const pomodoroTimerState = atom({
  key: 'isPlaying',
  default: false
})

export const pomodoroTimesState:RecoilState<pomodoroTimesStateT> = atom({
  key: 'initialTimes',
  default: {
    'initialTime': 45,
    'initialBreakTime': 5,
    'initialLongBreakTime': 45
  }
})


