import { ApolloClient, InMemoryCache } from '@apollo/client/core'

export const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
})
