import { Helmet } from 'react-helmet';

import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Helmet>
                <title>My Title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
