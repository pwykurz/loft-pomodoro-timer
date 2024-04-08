import { useEffect, useRef, useState, type FC, type ReactNode } from 'react'

import useClickOutside from '@/hooks/useClickOutside'
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
  const toggle = () => setIsOpen((prev) => !prev)

  const panelRef = useRef(null)

  const isClickedOutside = useClickOutside(panelRef)

  useEffect(() => {
    isClickedOutside && setIsOpen(() => false)
  }, [isClickedOutside])

  return (
    <div
      className={cn(
        styles.togglePanel,
        { [styles.open]: isOpen },
        className?.wrapper
      )}
      onClick={toggle}
      ref={panelRef}
    >
      <div className={cn(styles.header, className?.header)}>{header}</div>
      <div className={styles.body}>{children}</div>
    </div>
  )
}

export default TogglePanel
