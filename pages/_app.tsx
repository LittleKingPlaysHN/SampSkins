import { AppProps } from 'next/app';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Layout from 'components/Layout';
import theme from 'styles/theme';
import '../styles/globals.css';
import BackgroundEffect from 'components/BackgroundEffect';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d50dfdff" />
        <meta
          name="description"
          content="Pagina Sencilla Y Disponible Para Ver Las Skines De GTA San Andreas Con Sus ID Y Sus Nombres Dff y Txd"
        />
        <title>GTA | Skins San Andreas</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BackgroundEffect /> {/* Fondo negro con partículas azules */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
