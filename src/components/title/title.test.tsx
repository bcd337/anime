import { render } from '@testing-library/react'
import Title from './title.component'

describe('<Title />', () => {
  test('It should mount', () => {
    render(<Title>test</Title>)
  })
})
