import { fireEvent, render, screen } from '@testing-library/react'
import * as useCollection from 'hooks/useCollection'
import UpdateCollectionItem from './updateCollectionItem.component'

jest.mock('hooks/useCollection')

describe('<UpdateCollectionItem />', () => {
  beforeEach(() => {
    jest.spyOn(useCollection, 'removeCollection').mockReturnValue()
  })

  test('It should mount with ContainerTrash', () => {
    render(<UpdateCollectionItem 
      love={true}
      onToogle={jest.fn()}
      name=""
      colorFill={false}
      deleteAble={true}
    />)

    const trash = screen.getByTestId("UpdateCollectionItem-ContainerTrash")
    expect(trash).toBeInTheDocument()

    fireEvent.click(trash)

    const item = screen.getByTestId("UpdateCollectionItem-ContainerItem")
    fireEvent.click(item)
  })

  test('It should mount with not love', () => {
    render(<UpdateCollectionItem 
      love={false}
      onToogle={jest.fn()}
      name=""
      colorFill={true}
      deleteAble={true}
    />)

    expect(screen.getByTestId("UpdateCollectionItem-ContainerTrash")).toBeInTheDocument()
  })

  test('It should mount with not delete', () => {
    render(<UpdateCollectionItem 
      love={true}
      onToogle={jest.fn()}
      name=""
      colorFill={true}
      deleteAble={false}
    />)
    
    expect(screen.queryByTestId("UpdateCollectionItem-ContainerTrash")).not.toBeInTheDocument()
  })
})
