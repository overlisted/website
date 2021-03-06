import "styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => <>
  <Head>
    <title>overlisted</title>
    <meta name="author" content="overlisted, mail@overlisted.net" />
    <meta
      name="description"
      content="My personal website. Includes all of my public projects and links to my social media."
    />
    <meta name="theme-color" content="#00ce87" />
    <meta name="color-scheme" content="only light" />
    <meta name="robots" content="all" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <div className="flex-grow">
    <Component {...pageProps} />
  </div>
  <footer className="flex items-center my-6 flex-col">
    <strong>Stealing is bad</strong>
    Designed and implemented by overlisted
  </footer>
</>;

export const reportWebVitals = metric => {
  if(metric.label === "web-vital") console.info(`Web Vitals: ${metric.name} ${metric.value}`);
}

export default App;
