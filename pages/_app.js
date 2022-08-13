import "../src/App.css";
import { PropTypes } from "prop-types";
import NavBar from "../src/components/NavBar";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Matt&apos;s Food App</title>
<<<<<<< HEAD
        <meta charset="utf-8" />
=======
        <meta charSet="utf-8" />
>>>>>>> fb-database
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Food Memories Journal and Random Recipe Generator"
        />
<<<<<<< HEAD
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
=======
        <link rel="manifest" href="/manifest.json" />
>>>>>>> fb-database
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
