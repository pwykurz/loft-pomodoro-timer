import type { FC, ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

const TabPanel: FC<Props> = ({ children }) => <div>{children}</div>

export default TabPanel
