import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
`

export const CreateContainer = styled.div<{ colorFill?: boolean }>`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  height: 2.75rem;
  background-color: ${(props) => props.colorFill ? 'var(--background-color)' : 'var(--light)'};
  border-radius: 0.4rem;
  position: relative;
  cursor: pointer;
`

export const CreateInput = styled.input`
  width: 100%;
  border: none;
  height: 100%;
  border-radius: 0.4rem;
  outline: none;
  padding: 0 1rem;
  background: transparent;
`

export const CreateButton = styled.button<{ colorFill?: boolean }>`
  width: 7rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid ${(props) => props.colorFill ? 'var(--light)' : 'var(--background-color)'};
  background: none;
  border-top: none;
  border-right: none;
  border-bottom: none;
  cursor: pointer;
`