import Link from "next/link";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { GitHub, AccountCircle } from "@mui/icons-material";

function NavBar() {
  return (
    <AppBar
      className="appbar"
      position="fixed"
      sx={{
        background: "linear-gradient(45deg, lavender, lightblue)",
        height: "4rem",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        justifyContent: "center",
      }}
    >
      <Toolbar
        className="toolbar"
        sx={{
          gap: "24px",
          alignItems: "center",
        }}
      >
        <Link href="/">
          <Button variant="text">About</Button>
        </Link>

        <Link href="/foodmemories">
          <Button variant="text">Food Memories</Button>
        </Link>

        <Link href="/recipelookup">
          <Button variant="text">Recipe Generator</Button>
        </Link>

        <Box
          sx={{
            ml: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button href="/login">
            <AccountCircle
              htmlColor="white"
              sx={{ fontSize: "60px", alignSelf: "center", mt: "0px" }}
            />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/matthewaching/food-memories">
            <GitHub
              htmlColor="white"
              sx={{ fontSize: "54px", alignSelf: "center", mt: "2px" }}
            />
          </a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
