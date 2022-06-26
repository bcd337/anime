import { screen, render } from '@testing-library/react'
import Arrow from './arrow.component'

describe('<Arrow />', () => {
  test('It should arrow left', () => {
    render(<Arrow />)
    expect(screen.getByTestId("ArrowLeft")).toBeInTheDocument()

    render(<Arrow tail={false} />)
    expect(screen.getByTestId("ArrowSmallLeft")).toBeInTheDocument()
  })

  test('It should arrow right', () => {
    render(<Arrow direction="right" />)
    expect(screen.getByTestId("ArrowRight")).toBeInTheDocument()

    render(<Arrow direction="right" tail={false} />)
    expect(screen.getByTestId("ArrowSmallRight")).toBeInTheDocument()
  })

  test('It should arrow top', () => {
    render(<Arrow direction="top" />)
    expect(screen.getByTestId("ArrowTop")).toBeInTheDocument()

    render(<Arrow direction="top" tail={false} />)
    expect(screen.getByTestId("ArrowSmallTop")).toBeInTheDocument()
  })

  test('It should arrow bottom', () => {
    render(<Arrow direction="bottom" />)
    expect(screen.getByTestId("ArrowBottom")).toBeInTheDocument()

    render(<Arrow direction="bottom" tail={false} />)
    expect(screen.getByTestId("ArrowSmallBottom")).toBeInTheDocument()
  })
})
