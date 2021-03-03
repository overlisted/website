import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

        </Head>
        <body className="flex-col">
          <Main/>
          <footer className="flex items-center my-6 flex-col">
            <strong>Stealing is bad</strong>
            Designed and implemented by overlisted
          </footer>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default CustomDocument;
