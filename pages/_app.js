import "../src/App.css";
import Link from "next/link";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";
import { PropTypes } from "prop-types";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "#add8e6",
          display: "flex",
          flexDirection: "row",
          padding: "8px",
          gap: "8px",
        }}
      >
        <Link href="./foodmemories">
          <Button variant="text">Food Memories</Button>
        </Link>

        <Link href="./recipelookup">
          <Button variant="text">Recipe Lookup API</Button>
        </Link>
      </AppBar>
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

export default MyApp;