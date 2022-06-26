import { render } from '@testing-library/react'
import Button from './button.styled'

describe('<Button />', () => {
  test('It should mount', () => {
    render(<Button>test</Button>)
  })
})
