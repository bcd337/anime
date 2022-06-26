import React from 'react'
import { useRoutes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ApolloProvider } from '@apollo/client'
import Theme from 'components/theme'
import Header from 'components/header'
import Footer from 'components/footer'
import routes from 'routes'
import apollo from 'common/apollo'

import { Container } from './main.styled'

const Main: React.FC = () => {
  const router = useRoutes(routes)
  
  return (
    <Theme>
      <ApolloProvider client={apollo}>
        <HelmetProvider>
          <Container>
            <Header />
            {router}
            <Footer />
          </Container>
        </HelmetProvider>
      </ApolloProvider>
    </Theme>
  )
}

export default Main