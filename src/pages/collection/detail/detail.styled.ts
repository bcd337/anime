import styled from '@emotion/styled'
import Link from 'components/link'

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  white-space: nowrap;
  flex-flow: column;
`

export const ContainerLink = styled(Link)`
  position: relative;
`

export const ContainerName = styled.h2`
  position: relative;
` 

export const ContainerIcon = styled.div`
  display: flex;
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  cursor: pointer;
`