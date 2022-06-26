/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen, act } from '@testing-library/react'
import * as useGetAnimes from 'hooks/anime/useGetAnimes'
import ManageCollection from './manageCollection.component'

jest.mock('components/manageAnimeLists', () => ({ onLoadNextPage }) => <div onClick={(inView) => onLoadNextPage(inView)} data-testid="onLoadNextPage"/>)
jest.mock( 'hooks/useStateHistory', () => (_, v) => [v, jest.fn()])
jest.mock('hooks/anime/useGetAnimes')

describe('<ManageCollection />', () => {
  beforeEach(() => {
    jest.spyOn(useGetAnimes, 'useGetAnimes').mockReturnValue({ 
      loading: false, 
      error: undefined, 
      data: {
        Page: {
          pageInfo: {
            total: 0,
            currentPage: 0,
            lastPage: 0,
            hasNextPage: false,
            perPage: 0,
          },
          media: [
            {
              id: 1,
            }
          ],
        },
      },
    })
    jest.spyOn(useGetAnimes, 'getAnimesPromise').mockResolvedValue({
      data: {
        Page: {
          pageInfo: {
            total: 0,
            currentPage: 0,
            lastPage: 0,
            hasNextPage: false,
            perPage: 0,
          },
          media: [
            {
              id: 1,
            }
          ],
        },
      },
      loading: false,
      networkStatus: 200,
    })
  })
  test('It should mount', async () => {
    render(<ManageCollection />)

    fireEvent.click(screen.getByTestId("ManageCollection-toogle-sort"))
    fireEvent.click(screen.getByTestId("ManageCollection-toogle-sort"))

    await act(() => {
      fireEvent.click(screen.getByTestId("onLoadNextPage"), { inView: true })
      fireEvent.click(screen.getByTestId("onLoadNextPage"), { inView: false })
    })
    
  })
})
