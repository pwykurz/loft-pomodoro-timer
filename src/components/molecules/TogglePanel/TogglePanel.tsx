import { useRef, useState, type FC, type ReactNode } from 'react'

import { useOnClickOutside } from 'usehooks-ts'

import { cn } from '@/lib/utils'

import styles from './TogglePanel.module.scss'

export type Props = {
  header: ReactNode
  children: ReactNode
  className?: {
    wrapper?: string
    header?: string
  }
}

const TogglePanel: FC<Props> = ({ header, children, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(() => true)

  const bodyRef = useRef(null)

  const handleClickOutside = () => {
    setIsOpen(() => false)
  }

  useOnClickOutside(bodyRef, handleClickOutside)

  return (
    <div
      className={cn(
        styles.togglePanel,
        { [styles.open]: isOpen },
        className?.wrapper
      )}
      onClick={open}
    >
      <div className={cn(styles.header, className?.header)}>{header}</div>
      <div className={styles.body} ref={bodyRef}>
        {children}
      </div>
    </div>
  )
}

export default TogglePanel
