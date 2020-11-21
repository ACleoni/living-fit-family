import { AppProps /*, AppContext */ } from 'next/app';
import Head from 'next/head';
import { Provider } from 'next-auth/client';

import UIKit from '../utils/UIKit';

import '../components/editor/editor.css';
import '../styles/globals.scss';

import Header from '@components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <UIKit>
        <Header />
        <Component {...pageProps} />
      </UIKit>
    </Provider>
  );
}

export default MyApp;
