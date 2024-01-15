'use client'
import {Cog8ToothIcon} from "@heroicons/react/24/solid"

import SimpleDialog from "@/components/molecules/SimpleDialog"
import PomodoroForm from "@/components/organisms/PomodoroTimer/PomodoroForm"

const PomodoroSettingsDialog = () => (
    <SimpleDialog buttonIcon={<Cog8ToothIcon />} buttonText='Settings' title='Settings'>
      <PomodoroForm />
    </SimpleDialog>
  )

export default PomodoroSettingsDialog
