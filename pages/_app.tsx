import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../Layout/Layout';
import { createContext, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
