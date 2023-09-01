import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Boiler</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
