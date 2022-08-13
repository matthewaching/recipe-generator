import Link from "next/link";
import { AppBar } from "@mui/material";
import { Button } from "@mui/material";

function NavBar() {
  return (
    <AppBar
      sx={{
<<<<<<< HEAD
        backgroundColor: "#add8e6",
=======
        background: "linear-gradient(45deg, lavender, lightblue)",
>>>>>>> fb-database
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

<<<<<<< HEAD
      <Link href="./foodmemories">
=======
      <Link href="/foodmemories">
>>>>>>> fb-database
        <Button
          variant="text"
          sx={{
            marginLeft: "auto",
          }}
        >
          Food Memories
        </Button>
      </Link>

<<<<<<< HEAD
      <Link href="./recipelookup">
=======
      <Link href="/recipelookup">
>>>>>>> fb-database
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
