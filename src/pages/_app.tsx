import { AppProps /*, AppContext */ } from 'next/app';
import Wrapper from '@/components/wrapper/wrapper';
import { Provider } from 'next-auth/client';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </Provider>
  );
}

export default MyApp;
