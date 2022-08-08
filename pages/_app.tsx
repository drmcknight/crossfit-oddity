import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '../style/theme.config';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
