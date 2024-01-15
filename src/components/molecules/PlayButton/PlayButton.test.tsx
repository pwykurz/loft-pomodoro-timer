import {jest, test} from "@jest/globals"
import { render, screen } from "@testing-library/react"

import PlayButton from "@/components/molecules/PlayButton/PlayButton"

const PlayButtonOnChange = jest.fn()
test("Button exist", () => {
    render(<PlayButton onChange={PlayButtonOnChange} />)
})