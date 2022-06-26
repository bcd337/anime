import React from "react"
import { Helmet } from "react-helmet-async"
import { Container } from './pageContainer.styled'

const PageContainer: React.FC<{ children: React.ReactNode, title: string }> = ({ 
  children, 
  title,
}) => {
  return (
    <Container data-testid="PageContainer">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      {children}
    </Container>
  )
}

export default PageContainer
