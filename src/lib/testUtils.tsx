
import {type FC, type ReactNode} from "react"

import {RecoilRoot} from "recoil"

export const createTestIdObject = <T extends Record<string, string>>(prefix: string, ids: T): Record<keyof T, string> =>
  Object.entries(ids).reduce((acc, [key, value]) => {
    acc[key as keyof T] = `${prefix}-${value}`
    return acc
  }, {} as Record<keyof T, string>)


export type Props = {
  children: ReactNode
}

export const RecoilProvider: FC<Props> = ({children}) => <RecoilRoot>{children}</RecoilRoot>
