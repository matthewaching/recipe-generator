import Link from "next/link";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { GitHub, AccountCircle } from "@mui/icons-material";

function NavBar() {
  return (
    <AppBar
      className="appbar"
      position="fixed"
      sx={{
        backgroundColor: "white",
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
          <Button
            variant="text"
            sx={{
              color: "#023047",
              fontWeight: "bold",
            }}
          >
            About
          </Button>
        </Link>

        <Link href="/foodmemories">
          <Button
            variant="text"
            sx={{
              color: "#023047",
              fontWeight: "bold",
            }}
          >
            Food Memories
          </Button>
        </Link>

        <Link href="/recipelookup">
          <Button
            variant="text"
            sx={{
              color: "#023047",
              fontWeight: "bold",
            }}
          >
            Recipe Generator
          </Button>
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
              htmlColor="#023047"
              sx={{ fontSize: "59px", alignSelf: "center", mt: "0px" }}
            />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <Button href="https://github.com/matthewaching/food-memories">
            <GitHub htmlColor="#023047" sx={{ fontSize: "54px" }} />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
