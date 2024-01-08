import { type FC, type ReactNode } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"


export type Props = {
  title: string | ReactNode,
  children: ReactNode
}

const SimpleDialog: FC<Props> = ({title, children}) => (
  <Dialog>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          {children}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)

export default SimpleDialog
