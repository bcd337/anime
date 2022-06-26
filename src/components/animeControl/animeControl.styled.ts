import styled from '@emotion/styled'

export const Container = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  width: calc(100% + 3rem);
  left: 0;
  height: 4rem;
  align-items: center;
  justify-content: flex-start;
  margin-left: -1.5rem;
  background: var(--light);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`

export const Item = styled.div<{ active?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 4rem;
  border-right: 1px solid var(--background-color);
  background-color: ${(props) => props.active ? 'var(--background-color)' : 'transparent'};

  > * {
    height: 2rem;
    width: 2rem;
  }
`

export const ItemPaging = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow-x: auto;
  flex: 1 1 0;

  ul {
    list-style: none;
    display: flex;
    height: 100%;
    align-items: center;

    li { 
      user-select: none;
      cursor: pointer;
      width: 4rem;
      text-align: center;
      border-right: 1px solid var(--background-color);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--light);

      > * {
        height: 100%;
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }

      &.selected {
        background-color: var(--background-color);
      }

      &:first-of-type {
        position: sticky;
        left: 0;
      }

      &:nth-last-of-type(2) {
        border-right: none;
      }

      &:last-of-type {
        position: sticky;
        right: 0;
        border-right: none;
        border-left: 1px solid var(--background-color);
      }
    }
  }
`