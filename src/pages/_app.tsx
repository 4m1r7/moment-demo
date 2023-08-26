import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/styles/globals.css';

import { PositionProvider } from '@/PositionContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <PositionProvider>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </PositionProvider>
  );
}

export default MyApp;
