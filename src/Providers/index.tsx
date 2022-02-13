import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://tech.z1.digital/graphql',
  cache: new InMemoryCache(),
});

export const Providers = ({ children }: any) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
