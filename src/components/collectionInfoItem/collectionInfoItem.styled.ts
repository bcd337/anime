import styled from '@emotion/styled'
import link from 'components/link'

export const Link = styled(link)<{ color: string }>`
  display: flex;
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  background: ${props => props.color};
  color: var(--light);
  flex: 0 0 fit-content;
`
