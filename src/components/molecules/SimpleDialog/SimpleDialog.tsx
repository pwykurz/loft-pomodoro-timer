'use client'
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

import styles from './SimpleDialog.module.scss'


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
          <ButtonWithIcon className={styles.button} icon={buttonIcon}>{buttonText}</ButtonWithIcon>
          : <Button className={styles.button}>{buttonText}</Button>
        }
      </DialogTrigger>
      <DialogContent className={styles.dialogWrapper}>
        <DialogHeader>
          <DialogTitle className={styles.title}>{title}</DialogTitle>
          <DialogDescription className={styles.description}>
            {children}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default SimpleDialog
