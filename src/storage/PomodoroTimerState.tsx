import {atom, RecoilState} from "recoil"

import {DEFAULT_POMODORO_TIMES} from "@/lib/initialLocalStorage"

export type pomodoroTimesStateT = {
  workTime: number,
  breakTime: number,
  longBreakTime: number,
}

export const pomodoroTimerState:RecoilState<pomodoroTimesStateT> = atom({
  key: 'pomodoroTime',
  default: {
    workTime: DEFAULT_POMODORO_TIMES.workTime,
    breakTime: DEFAULT_POMODORO_TIMES.breakTime,
    longBreakTime: DEFAULT_POMODORO_TIMES.longBreakTime,
  }
})

export const pomodoroIsPlayingState = atom({
  key: 'isPlaying',
  default: false
})

export const pomodoroIsBreakState = atom({
  key: 'isBreak',
  default: false
})

export const pomodoroLoadingState = atom(
  {
    key: 'isLoading',
    default: true
  }
)
