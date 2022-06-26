import { Container, Item, WidthControl } from './header.styled'

const Header = () => {
  return (
    <Container data-testid="Header">
      <WidthControl>
        <Item to="/">Home</Item>
        <Item to="/collection">Collection</Item>
      </WidthControl>
    </Container>
  )
}

export default Header