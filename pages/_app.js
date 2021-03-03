import "styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return <>
    <Head>
      <title>overlisted</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default App;
