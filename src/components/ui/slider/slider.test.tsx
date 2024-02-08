import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react"

import Slider, {Props, testId} from "@/components/ui/slider/slider"

const DEFAULT_VALUES = {
  min: "0",
  max: "100",
  defaultValues: "0",
}

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

const onChange = jest.fn()
const renderComponent = ({defaultValue,
                           min,
                           max,
                           step,
                           onChange}: Props) => render(
  <Slider defaultValue={defaultValue}
          max={max}
          min={min}
          onChange={onChange}
          step={step}/>
)


describe('Slider', () => {
  it('should render correctly', () => {
    renderComponent({onChange: onChange})
    const slider = screen.getByTestId(testId.wrapper)
    expect(slider).toBeInTheDocument()
  })

  it('should has default min value', () => {
    renderComponent({onChange: onChange})
    const slider = screen.getByTestId(testId.thumb)
    expect(slider).toHaveAttribute('aria-valuemin', DEFAULT_VALUES.min)
  })

  it('should has default max value', () => {
    renderComponent({onChange: onChange})
    const slider = screen.getByTestId(testId.thumb)
    expect(slider).toHaveAttribute('aria-valuemax', DEFAULT_VALUES.max)
  })

  it('should has default defaultValues value', () => {
    renderComponent({onChange: onChange})
    const slider = screen.getByTestId(testId.thumb)
    expect(slider).toHaveAttribute('aria-valuenow', DEFAULT_VALUES.defaultValues)
  })

  it('applies custom props correctly', () => {
    const defaultValue = [30]
    const min = 10
    const max = 90
    const step = 5
    renderComponent(
      {
        onChange: onChange,
        defaultValue: defaultValue,
        min: min,
        max: max,
        step: step}
    )

    const sliderRoot = screen.getByTestId(testId.thumb)
    expect(sliderRoot).toHaveAttribute('aria-valuemin', min.toString())
    expect(sliderRoot).toHaveAttribute('aria-valuemax', max.toString())
    expect(sliderRoot).toHaveAttribute('aria-valuenow', defaultValue.toString())
  })
})
