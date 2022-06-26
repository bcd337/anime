import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import * as useCollection from 'hooks/useCollection'
import CollectionInfo from './collectionInfo.component'

jest.mock('hooks/useCollection')

describe('<CollectionInfo />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue([])
  })

  test('It should not render Container', () => {
    render(<CollectionInfo id={1} />)

    expect(screen.queryByTestId("CollectionInfo-Container")).not.toBeInTheDocument()
  })

  test('It should render Container', () => {
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue(["name", "test"])
    render(<BrowserRouter><CollectionInfo id={1} /></BrowserRouter>)

    expect(screen.getByTestId("CollectionInfo-Container")).toBeInTheDocument()
  })
})
