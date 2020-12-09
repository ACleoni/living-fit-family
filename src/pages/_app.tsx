import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'next-auth/client';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from '../styles/theme';
import '../styles/globals.scss';

import Header from '@components/navigation/Header';
import { StoreProvider } from 'src/context/store';

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Living Fit Family</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <StoreProvider>
            <Header />
            <Component {...pageProps} />
          </StoreProvider>
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
