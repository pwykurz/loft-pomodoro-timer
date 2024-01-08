import { type FC, type ReactNode } from 'react'

import {ButtonWithIcon} from "@/components/molecules"
import { Button } from '@/components/ui/button'
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"


export type Props = {
  title: string | ReactNode,
  buttonText: string,
  buttonIcon?: ReactNode,
  children: ReactNode
}

const SimpleDialog: FC<Props> = ({title, buttonText, buttonIcon, children}) => (
  <Dialog>
    <DialogTrigger>
      {buttonIcon ?
        <ButtonWithIcon icon={buttonIcon} >{buttonText}</ButtonWithIcon>
        :<Button>{buttonText}</Button>
      }
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>
          {children}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button">Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export default SimpleDialog
