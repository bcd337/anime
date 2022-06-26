import { fireEvent, render, screen } from '@testing-library/react'
import MySwal from 'modal'
import * as useCollection from 'hooks/useCollection'
import DeleteAction from './deleteAction.component'

jest.mock('hooks/useCollection')

describe('<DeleteAction />', () => {
  test('It should mount', () => {
    jest.spyOn(useCollection, 'removeMediaFromCollection').mockReturnValue()
    jest.spyOn(MySwal, 'fire').mockResolvedValue({ isConfirmed: true, isDenied: false, isDismissed: false })
    render(<DeleteAction 
      id={1}
      title="title"
      name="name"
    />)

    const button = screen.getByTestId("DeleteAction")

    fireEvent.click(button)

    jest.spyOn(MySwal, 'fire').mockResolvedValue({ isConfirmed: false, isDenied: false, isDismissed: false })

    fireEvent.click(button)
  })
})
