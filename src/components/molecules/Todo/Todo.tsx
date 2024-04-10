import type { FC, ReactNode } from 'react'

export type Props = {
  children: ReactNode
}

import styles from './Todo.module.scss'

const Todo: FC<Props> = ({ children }) => {
  return (
    <li className={styles.wrapper}>
      <span className={styles.title}>checkbox || {children} (12.05.2024) </span>
      <span className={styles.actions}> edit | delete</span>
    </li>
  )
}

export default Todo
