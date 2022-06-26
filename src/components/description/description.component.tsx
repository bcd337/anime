
import React from 'react'
import DOMPurify from 'common/purify'
import { Container, ContainerBody, ContainerTitle } from './description.styled'

const Description: React.FC<{ desc: string }> = ({ desc }) => {

  return (
    <Container data-testid="Description-Container">
      <ContainerTitle>Description</ContainerTitle>
      <ContainerBody dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(desc) }} />
    </Container>
  )
}

export default Description
