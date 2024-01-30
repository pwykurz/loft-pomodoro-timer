import {useEffect} from "react"

import {useRecoilState} from "recoil"

import {Loader} from "@/components/molecules"
import {PomodoroTimer} from "@/components/organisms/PomodoroTimer"
import {pomodoroLoadingState} from "@/storage/PomodoroTimerState"

const LOADER_TIME = 3000
const MainPage = () => {
  const [loading, setLoading] = useRecoilState(pomodoroLoadingState)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, LOADER_TIME)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <Loader /> : <PomodoroTimer />}
    </>
  )
}

export default MainPage
