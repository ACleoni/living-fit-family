import React from 'react';
import { AppProps /*, AppContext */ } from 'next/app';
import { Provider } from 'next-auth/client';
import Header from '@components/header/Header';

// StyleSheets
import 'semantic-ui-css/semantic.min.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
