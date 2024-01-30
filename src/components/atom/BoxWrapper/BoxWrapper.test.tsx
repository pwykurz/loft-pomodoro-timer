import '@testing-library/jest-dom'

import {type ReactNode} from "react"

import {render, screen} from '@testing-library/react'

import {BoxWrapper} from "@/components/atom"
import {testId} from "@/components/atom/BoxWrapper/BoxWrapper"

const renderComponent = (children: ReactNode) => render(
  <BoxWrapper>{children}</BoxWrapper>
)

const CustomComponent = (): ReactNode => <div>children</div>

describe('BoxWrapper Component', () => {
  it('Is rendered', () => {
    renderComponent(<CustomComponent />)
    const boxWrapper = screen.getByTestId(testId.wrapper)

    expect(boxWrapper).toBeInTheDocument()
  })
})

