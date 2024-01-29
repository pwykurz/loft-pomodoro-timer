export {type FC, type ReactNode} from 'react'
import styles from './BoxWrapper.module.scss'

export type Props = {
  children: ReactNode
}

const BoxWrapper:FC<Props> = ({children}) => {
  return (
    <div className={styles.boxWrapper}>{children}</div>
  )
}

export default BoxWrapper
