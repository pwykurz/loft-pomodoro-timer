'use client'
import {type FC} from "react"

import {ArrowPathIcon, ForwardIcon} from "@heroicons/react/24/solid"

import {ButtonWithIcon} from "@/components/molecules"

import PomodoroSettingsDialog from "../PomodoroDialog"
import styles from '../PomodoroTimer.module.scss'

export type Props = {
  onReset: () => void
  onNextSession: () => void
}
const PomodoroActions: FC<Props> = ({onReset, onNextSession}) => (
  <div className={styles.pomodoroButtons}>
    <ButtonWithIcon icon={<ArrowPathIcon/>} onClick={onReset}>Reset</ButtonWithIcon>
    <ButtonWithIcon icon={<ForwardIcon/>} onClick={onNextSession}>Next session</ButtonWithIcon>
    <PomodoroSettingsDialog />
  </div>
)

export default PomodoroActions
