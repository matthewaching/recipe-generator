import Link from "next/link";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";

function NavBar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "#add8e6",
        display: "flex",
        flexDirection: "row",
        padding: "8px",
        gap: "16px",
        height: "48px",
      }}
    >
      <Link href="/">
        <Button variant="text">About</Button>
      </Link>

      <Link href="./foodmemories">
        <Button
          variant="text"
          sx={{
            marginLeft: "auto",
          }}
        >
          Food Memories
        </Button>
      </Link>

      <Link href="./recipelookup">
        <Button variant="text">Recipe Generator</Button>
      </Link>

      <a
        className="gitlink"
        href="https://github.com/matthewaching/food-memories"
      >
        <img src="/images/gitlight.png" alt="github logo" />
      </a>
    </AppBar>
  );
}

export default NavBar;
