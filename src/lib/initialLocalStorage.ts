export const DEFAULT_POMODORO_TIMES = {
  'workTime': 25,
  'breakTime': 5,
  'longBreakTime': 15
}

export type DefaultPomodoroTimesType = {
  longBreakTime: number;
  breakTime: number;
  workTime: number;
}

class PomodoroTimeLocalStorage {
  public setPomodoroTimeToLocalStorage = ({longBreakTime, breakTime, workTime}: DefaultPomodoroTimesType) => {
    return localStorage.setItem('pomodoroTime', JSON.stringify({
      'workTime': workTime,
      'breakTime': breakTime,
      'longBreakTime': longBreakTime,
    }))
  }
  public setPomodoroTimeFromLocalStorage = (): DefaultPomodoroTimesType => {
    if (!localStorage.getItem("pomodoroTime")) {
      localStorage.setItem('pomodoroTime', JSON.stringify(DEFAULT_POMODORO_TIMES))
      return DEFAULT_POMODORO_TIMES

    } else {
      return this.getPomodoroTimeFromLocalStorage()
    }
  }
  public getPomodoroTimeFromLocalStorage = () =>
    localStorage.getItem("pomodoroTime")
      ? JSON.parse(<string>localStorage.getItem("pomodoroTime"))
      : DEFAULT_POMODORO_TIMES
}

export default PomodoroTimeLocalStorage

