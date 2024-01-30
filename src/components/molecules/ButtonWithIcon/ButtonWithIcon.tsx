import {type FC, type ReactNode} from "react"

import { Button } from "@/components/ui/button"
import {createTestIdObject} from "@/lib/testUtils"
import {cn} from "@/lib/utils"

import styles from './ButtonWithIcon.module.scss'

export type Props = {
  icon: ReactNode
  children: string | ReactNode,
  className?: string,
  onClick?: () => void
}

export const testId = createTestIdObject('ButtonWithIcon', {
  button: 'button',
})
const ButtonWithIcon: FC<Props> = ({ icon, children, className, ...props}) => {
  return (
    <Button className={cn(styles.primary, 'mr-2', className)} data-testid={testId.button} {...props}>
      <span className="mr-2 h-4 w-4">{icon}</span> {children}
    </Button>
  )
}

export default ButtonWithIcon
