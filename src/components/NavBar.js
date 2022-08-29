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
          gap: "16px",
        }}
      >
        <Link href="/">
          <Button variant="text">About</Button>
        </Link>

        <Link href="/foodmemories">
          <Button
            variant="text"
            sx={{
              marginLeft: "auto",
            }}
          >
            Food Memories
          </Button>
        </Link>

        <Link href="/recipelookup">
          <Button variant="text">Recipe Generator</Button>
        </Link>

        <Box className="gitlink">
          <a href="https://github.com/matthewaching/food-memories">
            <GitHub
              htmlColor="white"
              sx={{ fontSize: "54px", alignSelf: "center" }}
            />
          </a>
        </Box>

        {/* <a
          className="gitlink"
          href="https://github.com/matthewaching/food-memories"
        >
          <img src="/images/gitlight.png" alt="github logo" />
        </a> */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
