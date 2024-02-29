import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://cms.moment-studio.ir/graphql',
  cache: new InMemoryCache(),
});

export default client;
