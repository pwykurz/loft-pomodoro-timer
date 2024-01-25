import {pomodoroTimesStateT} from "@/storage/PomodoroTimerState"

export const DEFAULT_POMODORO_TIMES = {
  workTime: 25,
  breakTime: 5,
  longBreakTime: 15,
  isBreak: false,
  breakAutostart: false,
}

class PomodoroTimeLocalStorage {
  public setPomodoroTimeToLocalStorage = ({longBreakTime, breakTime, workTime, isBreak, breakAutostart}: pomodoroTimesStateT) => {
    return localStorage.setItem('pomodoroTime', JSON.stringify({
      workTime: workTime,
      breakTime: breakTime,
      longBreakTime: longBreakTime,
      isBreak: isBreak,
      breakAutostart: breakAutostart
    }))
  }
  public getPomodoroTimeConfig = (): pomodoroTimesStateT => {
    if (!localStorage.getItem("pomodoroTime")) {
      localStorage.setItem('pomodoroTime', JSON.stringify(DEFAULT_POMODORO_TIMES))
      return DEFAULT_POMODORO_TIMES
    }
    return JSON.parse(<string>localStorage.getItem("pomodoroTime"))
  }
}

export default new PomodoroTimeLocalStorage

