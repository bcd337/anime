import { screen, render } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import CollectionInfoItem from './collectionInfoItem.component'

describe('<CollectionInfoItem />', () => {
  test('It should mount', () => {
    render(<BrowserRouter><CollectionInfoItem name="name" color="red" /></BrowserRouter>)

    expect(screen.getByTestId("collectionInfoItem-Link")).toBeInTheDocument()
  })
})
