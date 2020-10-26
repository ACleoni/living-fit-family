import Wrapper from '@/components/wrapper/wrapper';
import { AppProps, /*, AppContext */ } from 'next/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
