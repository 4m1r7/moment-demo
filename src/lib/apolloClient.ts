import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://moment-studio.ir/graphql',
  cache: new InMemoryCache(),
});

export default client;
