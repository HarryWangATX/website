import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
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
        </Head>
        <body className="antialiased text-black bg-white dark:bg-slate-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
