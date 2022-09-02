import Link from "next/link";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { GitHub, AccountCircle, VpnKey } from "@mui/icons-material";

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
          alignItems: "center",
        }}
      >
        <Box
          className="links"
          sx={{
            display: "flex",
            gap: "2.5rem",
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
              Home
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
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: "auto",
          }}
        >
          <Button href="https://github.com/matthewaching/food-memories">
            <GitHub htmlColor="#023047" sx={{ fontSize: "54px" }} />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mr: "-1rem",
          }}
        >
          <Button href="/login">
            <VpnKey
              htmlColor="#023047"
              sx={{ fontSize: "59px", alignSelf: "center", mt: "0px" }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
