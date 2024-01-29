import {atom, RecoilState} from "recoil"

import {DEFAULT_POMODORO_TIMES} from "@/lib/initialLocalStorage"

export const pomodoroTimerState = atom({
  key: 'isPlaying',
  default: false
})

export type pomodoroTimesStateT = {
  workTime: number,
  breakTime: number,
  longBreakTime: number,
  isBreak: boolean,
  breakAutostart: boolean
}

export const pomodoroTimesState:RecoilState<pomodoroTimesStateT> = atom({
  key: 'pomodoroTime',
  default: {
    workTime: DEFAULT_POMODORO_TIMES.workTime,
    breakTime: DEFAULT_POMODORO_TIMES.breakTime,
    longBreakTime: DEFAULT_POMODORO_TIMES.longBreakTime,
    isBreak: DEFAULT_POMODORO_TIMES.isBreak,
    breakAutostart: DEFAULT_POMODORO_TIMES.breakAutostart
  }
})

export const pomodoroLoading = atom(
  {
    key: 'isLoading',
    default: true
  }
)
