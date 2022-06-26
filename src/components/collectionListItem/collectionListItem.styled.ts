import styled from "@emotion/styled"
import Img from 'components/img'

export const Container = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  position: relative;
  text-decoration: none;
  flex-flow: row;
`

export const ContainerImage = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  width: 10rem;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50%, 1fr));
`

export const ContainerDesc = styled.div`
  background: white;
  flex: 1 1 auto;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  gap: 1rem;
  justify-content: space-between;
`

export const ContainerAction = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`

export const ActionButton = styled.div`
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  border-radius: 0.4rem;
  cursor: pointer;
`

export const Image = styled(Img)`
  min-width: 50%;
  min-height: 50%;
  color: transparent;
  background: transparent;
  display: inline-block;
`

export const ImageColor = styled.div<{ color: string }>`
  min-width: 50%;
  min-height: 50%;
  color: transparent;
  background: ${props => props.color || 'transparent' };
  display: inline-block;
`

export const Table = styled.table`

  td {
    padding: 0.5rem;

    &:first-of-type {
      padding-left: 0;
    }
  }
`
