import { createContext } from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@utils/apollo';
import '@styles/globals.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const AppContext = createContext(null);

const App = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ApolloProvider>
);

export default App;
