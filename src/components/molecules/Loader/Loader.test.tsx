import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/react'

import {testId} from "@/components/atom/BoxWrapper/BoxWrapper"

import Loader from "./Loader"


const renderComponent = () => render(
  <Loader />
)

describe('Loader Component', () => {
  it('Is rendered', () => {
    renderComponent()
    const loader = screen.getByTestId(testId.wrapper)

    expect(loader).toBeInTheDocument()
  })
})

