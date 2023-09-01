import '@/styles/globals.css';
import '@radix-ui/themes/styles.css';
import type { AppProps } from 'next/app';
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
