import {atom, RecoilState} from "recoil"

import {DEFAULT_POMODORO_TIMES} from "@/lib/initialLocalStorage"

export type pomodoroTimesStateT = {
  'initialWorkTime': number,
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
    'initialWorkTime': DEFAULT_POMODORO_TIMES.workTime,
    'initialBreakTime': DEFAULT_POMODORO_TIMES.breakTime,
    'initialLongBreakTime': DEFAULT_POMODORO_TIMES.longBreakTime
  }
})
