import '@testing-library/jest-dom'
import {act, render, screen} from '@testing-library/react'
import {RecoilRoot, useRecoilValue} from 'recoil'

import {videoPlayerConfig} from "@/storage/YouTubeState"

import VolumeSlider, {testId} from './VolumeSlider'

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))
jest.mock('@heroicons/react/16/solid', () => ({
  SpeakerWaveIcon: () => <div>SpeakerWaveIcon</div>,
  SpeakerXMarkIcon: () => <div>SpeakerXMarkIcon</div>,
}))

const DisplayVolume = () => {
  const config = useRecoilValue(videoPlayerConfig)
  return <div data-testid="volume-display">{config.volume}</div>
}

const renderComponent = (props = {}) => {
  return render(
    <RecoilRoot>
      <VolumeSlider {...props} />
      <DisplayVolume />
    </RecoilRoot>
  )
}

describe('VolumeSlider', () => {
  it('should render correctly', () => {
    renderComponent()
    const slider = screen.getByTestId(testId.wrapper)
    expect(slider).toBeInTheDocument()
  })

  it('updates recoil state on volume change', async () => {
    const { getByTestId } = renderComponent()

    act(() => {
      const setVolume = jest.fn((volume) => {
        getByTestId("volume-display").textContent = volume.toString()
      })
      setVolume(0.5)
    })
    expect(getByTestId('volume-display')).toHaveTextContent('0.5')
  })
})

