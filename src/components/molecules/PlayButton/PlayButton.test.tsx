import '@testing-library/jest-dom'

import {fireEvent, render, screen} from '@testing-library/react'

import PlayButton, {testId} from "@/components/molecules/PlayButton/PlayButton"
import {RecoilProvider} from "@/lib/testUtils"

const PlayButtonOnChange = jest.fn()

const renderComponent = () => render(
  <RecoilProvider>
    <PlayButton onChange={PlayButtonOnChange} />
  </RecoilProvider>
)

describe('PlayButton Component', () => {
  it('Is rendered', () => {
      renderComponent()
      const playButton = screen.getByTestId(testId.button)

      expect(playButton).toBeInTheDocument()
  })

  it('Has label', () => {
    renderComponent()
    const playButton = screen.getByTestId(testId.button)
    const label = playButton.querySelector('label')

    expect(label).toBeInTheDocument()
  })

  it('Is clicked', () => {
    renderComponent()
    const playButton = screen.getByTestId(testId.button)
    const label = playButton.querySelector('label')

    fireEvent.click(label)

    expect(PlayButtonOnChange).toHaveBeenCalledTimes(1)
  })
})

