import { createContext } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@utils/apollo';
import '@styles/globals.css';

export const AppContext = createContext(null);

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
