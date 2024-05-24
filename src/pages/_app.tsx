import RouterMounting from '@/errorNext/useClient';
import { GlobalStyle } from '@/styles/globals';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterMounting>
        <Component {...pageProps} />
      </RouterMounting>
    </ThemeProvider>
  );
}
