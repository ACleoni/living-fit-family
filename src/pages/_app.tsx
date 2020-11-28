import { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import { Provider } from 'next-auth/client';

import theme from '../styles/theme';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';

import '../components/editor/editor.css';
import '../styles/globals.scss';

import Header from '@components/navigation/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
