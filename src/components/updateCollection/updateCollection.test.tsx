import { fireEvent, render, screen } from '@testing-library/react'
import MySwal from 'modal'
import * as useCollection from 'hooks/useCollection'
import { CoverImage, Title, Media } from 'common/interfaces/media.interface'
import UpdateCollection from './updateCollection.component'

jest.mock('hooks/useCollection')

const coverImage: CoverImage = {
  extraLarge: '',
  large: '',
  medium: '',
  color: 'red',
}

const title: Title = {
  romaji: 'romaji',
  english: 'english',
  native: 'native',
}

const media: Media = {
  id: 1,
  coverImage: coverImage,
  title: title,
}

describe('<UpdateCollection />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'addCollection').mockReturnValue()
    jest.spyOn(useCollection, 'addMediaToCollection').mockReturnValue()
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue(["name", "name3"])
    jest.spyOn(useCollection, 'removeMediaFromCollection').mockReturnValue()
    jest.spyOn(useCollection, 'useAllCollectionName').mockReturnValue(["name", 'name2', 'name3'])
    jest.spyOn(useCollection, 'isDuplicate').mockReturnValue(true)

    jest.spyOn(MySwal, 'showValidationMessage').mockReturnValue()
  })
  test('It should mount and test event change and click', () => {
    
    render(<UpdateCollection 
      id={1}
      media={media}
      create={true}
      colorFill={true}
      deleteAble={true}
    />)

    const items = screen.getAllByTestId("UpdateCollectionItem-ContainerItem")

    items.forEach((v) => fireEvent.click(v))

    const input = screen.getByTestId("UpdateCollection-CreateInput")
    const button = screen.getByTestId("UpdateCollection-CreateButton")

    fireEvent.click(button)
    fireEvent.change(input, { target: { value: 'name' } })
    fireEvent.click(button)
    jest.spyOn(useCollection, 'isDuplicate').mockReturnValue(false)
    fireEvent.change(input, { target: { value: 'newName' } })
    fireEvent.click(button)
  })

  test('It should not createable', () => {
    render(<UpdateCollection 
      id={1}
      media={media}
      create={false}
      colorFill={false}
      deleteAble={false}
    />)

    expect(screen.queryByTestId("UpdateCollection-CreateInput")).not.toBeInTheDocument()
  })
})
