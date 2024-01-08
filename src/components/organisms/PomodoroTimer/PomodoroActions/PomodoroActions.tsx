import {type FC} from "react"

import {ArrowPathIcon, Cog8ToothIcon, PlayIcon} from "@heroicons/react/24/solid"

import {ButtonWithIcon} from "@/components/molecules"
import PomodoroSettings from "@/components/organisms/PomodoroTimer/PomodoroSettings"

export type Props = {
  onReset: () => void
  onNextSession: () => void
  openSettings: () => void
}
const PomodoroActions: FC<Props> = ({onReset, onNextSession, openSettings}) => (
  <div className="timer-buttons">
    <ButtonWithIcon icon={<ArrowPathIcon/>} onClick={onReset}>Reset</ButtonWithIcon>
    <ButtonWithIcon icon={<PlayIcon/>} onClick={onNextSession}>Next session</ButtonWithIcon>
    <ButtonWithIcon icon={<Cog8ToothIcon/>} onClick={openSettings}>Settings</ButtonWithIcon>

    <PomodoroSettings />
  </div>
)

export default PomodoroActions
