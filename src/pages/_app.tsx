import { ChecklistProvider } from '@/shared/context/ChecklistContext';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChecklistProvider checklistsFetched={pageProps.checklists}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChecklistProvider>
  );
}
