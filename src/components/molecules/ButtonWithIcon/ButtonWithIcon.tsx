import {type FC, type ReactNode} from "react"

import { Button } from "@/components/ui/button"

export type Props = {
  icon: ReactNode
  children: string | ReactNode,
  onClick?: () => void
}
const ButtonWithIcon: FC<Props> = ({ icon, children, ...props}) => {
  return (
    <Button {...props}>
      <span className="mr-2 h-4 w-4">{icon}</span> {children}
    </Button>
  )
}

export default ButtonWithIcon
