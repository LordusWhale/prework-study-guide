import Head from 'next/head';
import '../styles/globals.css'
import { AuthProvider } from "../components/Auth.js";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A simple website to create, update and delete study cards."></meta>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
