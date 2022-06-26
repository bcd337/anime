import React from "react"
import { Container } from './pageContainer.styled'

const PageContainer: React.FC<{ children: React.ReactNode }> = ({ 
  children, 
}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default PageContainer
