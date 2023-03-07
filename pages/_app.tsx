import type { AppProps } from 'next/app';
import Script from 'next/script';
//CSS
import './css/globals.scss';
import './css/index.scss';
// pages
import './sign_up/sign_up.scss';

//App()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://kit.fontawesome.com/c1dcf09701.js" />
      <Component {...pageProps} />
    </>
  );
}
