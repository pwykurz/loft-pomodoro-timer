import {type FC, type ReactNode} from 'react'

import {createTestIdObject} from "@/lib/testUtils"

import styles from './BoxWrapper.module.scss'

export const testId = createTestIdObject('BoxWrapper', {
  wrapper: 'wrapper',
})

export type Props = {
  children: ReactNode
}

const BoxWrapper:FC<Props> = ({children}) => {
  return (
    <div className={styles.boxWrapper} data-testid={testId.wrapper}>{children}</div>
  )
}

export default BoxWrapper
