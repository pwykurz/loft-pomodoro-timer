import {type FC} from "react"

import {ArrowPathIcon, PlayIcon} from "@heroicons/react/24/solid"

import {ButtonWithIcon} from "@/components/molecules"

import PomodoroSettingsDialog from "../PomodoroSettingsDialog"

export type Props = {
  onReset: () => void
  onNextSession: () => void
}
const PomodoroActions: FC<Props> = ({onReset, onNextSession}) => (
  <div className="timer-buttons">
    <ButtonWithIcon icon={<ArrowPathIcon/>} onClick={onReset}>Reset</ButtonWithIcon>
    <ButtonWithIcon icon={<PlayIcon/>} onClick={onNextSession}>Next session</ButtonWithIcon>
    <PomodoroSettingsDialog />
  </div>
)

export default PomodoroActions
