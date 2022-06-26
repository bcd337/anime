import modal from 'modal'
import manageCollection from './manageCollection.modal'

jest.mock('components/manageCollection', () => () => 'test')
jest.mock('modal')

describe('<ManageCollection />', () => {
  beforeEach(() => {
    jest.spyOn(modal, 'fire').mockResolvedValue({ isConfirmed: true, isDenied: false, isDismissed: false })
  })
  test('It should mount', () => {
    manageCollection()
  })
})
