import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='min-h-screen mx-auto leading-normal md:text-lg wrap:px-0'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// mx-auto leading-normal md:text-lg font-main max-w-1200 wrap:px-0
