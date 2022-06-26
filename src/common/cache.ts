import { InMemoryCache } from '@apollo/client/core'

const cache = new InMemoryCache({
  typePolicies: {
    Page: {
      fields: {
        id: (_, { variables }) => {
          return JSON.stringify(variables)
        },
      },
      keyFields: ['id'],
    },
  }
});

export default cache