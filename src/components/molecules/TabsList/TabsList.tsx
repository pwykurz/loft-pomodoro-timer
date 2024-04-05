import type { FC } from 'react'

import { cn } from '@/lib/utils'

import styles from './TabsList.module.scss'

export type Props = {
  classes?: string
  tabs: string[]
}

const TabsList: FC<Props> = ({ tabs, classes }) => (
  <ul className={cn(styles.tabList, classes)}>
    {tabs.map((tab: string) => (
      <li className={styles.tab} key={tab}>
        {tab}
      </li>
    ))}
  </ul>
)

export default TabsList
