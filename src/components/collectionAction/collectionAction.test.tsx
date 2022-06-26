import { screen, render, fireEvent } from '@testing-library/react'
import { CoverImage, Title, Media, MediaCollection } from 'common/interfaces/media.interface'
import * as useCollection from 'hooks/useCollection'
import * as createCollectionName from 'modal/createCollectionName'
import CollectionAction from './collectionAction.component'

jest.mock('hooks/useCollection')
jest.mock('modal/createCollectionName')
jest.mock('modal/updateCollectionSingleMedia', () => async () => true)

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

const mediaCollection: MediaCollection = {
  name: 'name',
  media: [media],
}

describe('<CollectionAction />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue(['name'])
    jest.spyOn(useCollection, 'useAllCollectionName').mockReturnValue(["name"])
    jest.spyOn(useCollection, 'addMediaToCollection').mockReturnValue()
    jest.spyOn(useCollection, 'removeMediaFromCollection').mockReturnValue()
    jest.spyOn(useCollection, 'useCollection').mockReturnValue([mediaCollection])
  })

  test('It should not have ContainerIcon', () => {
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue([])
    jest.spyOn(useCollection, 'useCollection').mockReturnValue([mediaCollection, { ...mediaCollection, name: 'name 2' }])
    render(<CollectionAction
      id={1}
      title={title}
      coverImage={coverImage}
      icon={false}
    />)
    
    expect(screen.queryByTestId("CollectionAction")).not.toBeInTheDocument()
  })

  test('It should have ContainerIcon with title romaji and removeMediaFromCollection', () => {
    render(<CollectionAction
      id={1}
      title={title}
      coverImage={coverImage}
      icon={true}
    />)
    
    const action = screen.getByTestId("CollectionAction")
    expect(action).toBeInTheDocument()

    fireEvent.click(action)
  })

  test('It should have ContainerIcon with title english and updateCollectionSingleMedia', () => {
    jest.spyOn(useCollection, 'useCollection').mockReturnValue([mediaCollection, { ...mediaCollection, name: 'name 2' }])
    render(<CollectionAction
      id={1}
      title={{
        ...title,
        romaji: '',
      }}
      coverImage={coverImage}
      icon={true}
    />)
    
    const action = screen.getByTestId("CollectionAction")
    expect(action).toBeInTheDocument()

    fireEvent.click(action)
  })

  test('It should have ContainerIcon with title native and createCollectionName cancel', () => {
    jest.spyOn(createCollectionName, 'default').mockResolvedValue('name')
    jest.spyOn(useCollection, 'useCollection').mockReturnValue([])
    render(<CollectionAction
      id={1}
      title={{
        ...title,
        romaji: '',
        english: '',
      }}
      coverImage={coverImage}
      icon={true}
    />)
    
    const action = screen.getByTestId("CollectionAction")
    expect(action).toBeInTheDocument()

    fireEvent.click(action)
  })

  test('It should have ContainerIcon with title english and createCollectionName', () => {
    jest.spyOn(createCollectionName, 'default').mockResolvedValue('')
    jest.spyOn(useCollection, 'useCollection').mockReturnValue([])
    render(<CollectionAction
      id={1}
      title={{
        ...title,
        romaji: '',
      }}
      coverImage={coverImage}
      icon={true}
    />)
    
    const action = screen.getByTestId("CollectionAction")
    expect(action).toBeInTheDocument()

    fireEvent.click(action)
  })

  test('It should have ContainerIcon with title english and addMediaToCollection', () => {
    jest.spyOn(useCollection, 'useCollection').mockReturnValue([mediaCollection])
    jest.spyOn(useCollection, 'useAllCollectionOfAnime').mockReturnValue([])
    render(<CollectionAction
      id={1}
      title={{
        ...title,
        romaji: '',
      }}
      coverImage={coverImage}
      icon={true}
    />)
    
    const action = screen.getByTestId("CollectionAction")
    expect(action).toBeInTheDocument()

    fireEvent.click(action)
  })
})
