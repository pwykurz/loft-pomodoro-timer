import {Cog8ToothIcon} from "@heroicons/react/24/solid"

import SimpleDialog from "@/components/molecules/SimpleDialog"

const PomodoroSettingsDialog = () => {
return (
  <SimpleDialog buttonIcon={<Cog8ToothIcon />} buttonText='Settings' title='Settings'>
    Settings form
  </SimpleDialog>
)
}

export default PomodoroSettingsDialog
