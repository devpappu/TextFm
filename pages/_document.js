
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>         
           {/* add line-awesome  */}
          <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
                     
          {/* google font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Montserrat:wght@100;300;400;500&family=Roboto:wght@100;300&display=swap" rel="stylesheet"></link>

         <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet"></link>
          
        </Head>
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument