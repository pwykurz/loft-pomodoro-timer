import {type FC, type ReactNode} from 'react'

import {useRecoilState} from "recoil"

import {ButtonWithIcon} from "@/components/molecules"
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import {dialogState} from "@/storage/DialogState"


export type Props = {
  title: string | ReactNode,
  buttonText?: string,
  buttonIcon?: ReactNode,
  children: ReactNode,
}

const SimpleDialog: FC<Props> = ({title, buttonText, buttonIcon, children}) => {
  const [open, setOpen] = useRecoilState(dialogState)

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        {buttonIcon ?
          <ButtonWithIcon icon={buttonIcon}>{buttonText}</ButtonWithIcon>
          : <Button>{buttonText}</Button>
        }
      </DialogTrigger>
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
}

export default SimpleDialog
