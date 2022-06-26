import { ApolloClient } from '@apollo/client'
import cache from 'common/cache'

const apollo = () => {
  return new ApolloClient({
    uri: process.env.REACT_APP_API,
    cache,
  })
}

export default apollo()