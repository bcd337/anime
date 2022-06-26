import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 1;
  flex: 0 0 auto;
`

export const Item = styled(NavLink)`
  padding: 1.5rem;
  border-right: 1px solid var(--background-color);
  text-decoration: none;
  transition: background-color 250ms;
  cursor: pointer;

  &.active {
    background-color: var(--background-color);
  }

  &:visited {
    color: unset;
  }

  &:last-of-type {
    border-right: none;
  }
`

export const WidthControl = styled.div`
  display: flex;
  max-width: 90rem;
  margin: auto;
  width: 100vw;
  padding: 0 1.5rem;
`