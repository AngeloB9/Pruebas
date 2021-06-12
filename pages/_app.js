import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../componentes/theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/footer.css';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Proyecto Final</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link
          rel='shortcut icon'
          href='data:image/png;base64,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'></link>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
