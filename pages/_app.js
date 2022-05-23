import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import '../styles/globals.css';
import '../styles/pages/home.css';
import '../styles/tailwind.css';

import { wrapper } from '../redux/store';
import withRedux from 'next-redux-wrapper'

function MyApp({ Component, pageProps }) {

  return (
    <>
        <Component {...pageProps} />

    </>
  )
}

// export default MyApp
export default wrapper.withRedux(MyApp);
