import {atom, RecoilState} from "recoil"

import {DEFAULT_POMODORO_TIMES} from "@/lib/initialLocalStorage"

export type pomodoroTimesStateT = {
  'workTime': number,
  'breakTime': number,
  'longBreakTime': number
}

export const pomodoroTimerState = atom({
  key: 'isPlaying',
  default: false
})

export const pomodoroTimesState:RecoilState<pomodoroTimesStateT> = atom({
  key: 'pomodoroTime',
  default: {
    'workTime': DEFAULT_POMODORO_TIMES.workTime,
    'breakTime': DEFAULT_POMODORO_TIMES.breakTime,
    'longBreakTime': DEFAULT_POMODORO_TIMES.longBreakTime
  }
})
