import type { AppProps } from 'next/app';
import '../styles/global.scss';
import { Header } from '@/components/Header';
import FooterPage from '@/components/FooterPage';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <FooterPage />

    </>
  )
}
