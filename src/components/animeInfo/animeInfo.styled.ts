import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  flex: 1 1 auto;
  font-size: 1.1rem;
`

export const ContainerBody = styled.div`
  background-color: var(--light);
  border-radius: 0.4rem;
  padding: 1.5rem;
  text-align: justify;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  gap: 1rem;
`

export const ContainerTitle = styled.div`
  font-weight: bold;
  margin-bottom: 1.5rem;
`

export const Item = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-flow: column;

  &:last-of-type {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`

export const ItemTitle = styled.div`
  color: var(--color-light);
`

export const ItemBody = styled.div`
  
`