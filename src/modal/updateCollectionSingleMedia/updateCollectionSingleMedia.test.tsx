import modal from 'modal'
import updateCollectionSingleMedia from './updateCollectionSingleMedia.modal'

jest.mock('components/updateCollection', () => () => 'test')
jest.mock('modal')

describe('<UpdateCollectionSingleMedia />', () => {
  beforeEach(() => {
    jest.spyOn(modal, 'fire').mockResolvedValue({ isConfirmed: true, isDenied: false, isDismissed: false })
  })
  test('It should mount', () => {
    updateCollectionSingleMedia(1, {
      id: 1,
      coverImage: {
        color: 'red',
        large: '',
        extraLarge: '',
        medium: '',
      },
      title: {
        native: '',
        english: '',
        romaji: '',
      }
    })
  })
})
