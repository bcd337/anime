import React from 'react'
import { useRoutes } from 'react-router-dom'
import Theme from 'components/theme'
import Header from 'components/header'
import Footer from 'components/footer'
import routes from 'routes'
import { ApolloProvider } from '@apollo/client'
import apollo from 'common/apollo'

import { Container } from './main.styled'

const Main: React.FC = () => {
  const router = useRoutes(routes)
  
  return (
    <Theme>
      <ApolloProvider client={apollo}>
        <Container>
          <Header />
          {router}
          <Footer />
        </Container>
      </ApolloProvider>
    </Theme>
  )
}

export default Main