import { fireEvent, render, screen } from '@testing-library/react'
import { Media } from 'common/interfaces/media.interface'
import MySwal from 'modal'
import { BrowserRouter } from "react-router-dom"
import * as useCollection from 'hooks/useCollection'
import * as createCollectionName from 'modal/createCollectionName'
import CollectionListItem from './collectionListItem.component'

jest.mock('hooks/useCollection')
jest.mock('modal/createCollectionName')

const media1: Media = {
  id: 10,
  coverImage: {
    extraLarge: 'extraLarge',
    large: 'large',
    medium: 'medium',
    color: 'red',
  },
  title: {
    romaji: 'romaji',
    english: 'english',
    native: 'native',
  },
}

const media2: Media = {
  id: 2,
  coverImage: {
    extraLarge: '',
    large: 'large',
    medium: 'medium',
    color: 'red',
  },
  title: {
    romaji: '',
    english: 'english',
    native: 'native',
  },
}

const media3: Media = {
  id: 3,
  coverImage: {
    extraLarge: '',
    large: '',
    medium: 'medium',
    color: '',
  },
  title: {
    romaji: '',
    english: '',
    native: 'native',
  },
}

const media4: Media = {
  id: 20,
  coverImage: {
    extraLarge: '',
    large: '',
    medium: '',
    color: '',
  },
  title: {
    romaji: '',
    english: '',
    native: 'native',
  },
}

describe('<CollectionListItem />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'removeCollection').mockReturnValue()
    jest.spyOn(useCollection, 'renameCollection').mockReturnValue()
    jest.spyOn(createCollectionName, 'default').mockResolvedValue('name')
    jest.spyOn(createCollectionName, 'default').mockResolvedValueOnce('')
    jest.spyOn(MySwal, 'fire').mockResolvedValue({ isConfirmed: true, isDenied: false, isDismissed: false })
    jest.spyOn(MySwal, 'fire').mockResolvedValueOnce({ isConfirmed: false, isDenied: false, isDismissed: false })
  })

  test('It should mount', () => {
    render(<BrowserRouter><CollectionListItem 
      name="name"
      media={[media1, media2, media3, media4]}
    /></BrowserRouter>)

    const edit = screen.getByTestId("CollectionListItem-edit")

    fireEvent.click(edit)
    fireEvent.click(edit)

    const remove = screen.getByTestId("CollectionListItem-remove")

    fireEvent.click(remove)
    fireEvent.click(remove)
  })
})
