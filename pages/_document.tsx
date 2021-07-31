import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)

  //   return initialProps
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" href="/static/images/logo.png" />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/logo.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/images/logo.png"
          />
          <link rel="mask-icon" href="/static/images/logo.png" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
