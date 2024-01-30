import '@testing-library/jest-dom'

import {type FC, type ReactNode} from "react"

import {ForwardIcon} from "@heroicons/react/24/solid"
import {fireEvent, render, screen} from '@testing-library/react'

import ButtonWithIcon, {Props, testId} from "./ButtonWithIcon"

const ButtonWithIconOnClick = jest.fn()

const Icon = () => <ForwardIcon/>
const renderComponent = ({icon, children}: Props) => render(
  <ButtonWithIcon icon={icon} onClick={ButtonWithIconOnClick}>{children}</ButtonWithIcon>
)

const CustomComponent = (): ReactNode => <div>children</div>

describe('ButtonWithIcon Component', () => {
  it('Is rendered', () => {
    renderComponent({icon: <Icon />, children: <CustomComponent />})
    const buttonWithIcon = screen.getByTestId(testId.button)

    expect(buttonWithIcon).toBeInTheDocument()
  })

  it('Is clicked', () => {
    renderComponent({icon: <Icon />, children: <CustomComponent />})
    const buttonWithIcon = screen.getByTestId(testId.button)
    buttonWithIcon && fireEvent.click(buttonWithIcon)

    expect(ButtonWithIconOnClick).toHaveBeenCalledTimes(1)
  })
})

