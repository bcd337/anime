import modal from 'modal'
import * as useCollection from 'hooks/useCollection'
import createCollectionName from './createCollectionName.modal'

jest.mock('hooks/useCollection')
jest.mock('modal')

describe('<CreateCollectionName />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'isDuplicate').mockReturnValue(true)
    jest.spyOn(useCollection, 'isDuplicate').mockReturnValueOnce(false)
    jest.spyOn(modal, 'fire').mockImplementation(async ({ inputValidator }) => {
      inputValidator && inputValidator('name')
      inputValidator && inputValidator('name 2')
      inputValidator && inputValidator('')
      inputValidator && inputValidator('name 4')
      return { isConfirmed: false, isDenied: false, isDismissed: false }
    })
  })
  test('It should mount', () => {
    createCollectionName()
  })
})
