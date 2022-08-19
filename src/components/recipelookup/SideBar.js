import {
  Box,
  Drawer,
  Toolbar,
  InputAdornment,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import { RamenDining, Egg, ManageSearch } from "@mui/icons-material";

export default function SideBar({ setRecipe, callApi }) {
  return (
    <Drawer variant="permanent">
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          padding: "24px 6px 0 6px",
          background: "linear-gradient(lavender, lightblue)",
          height: "100%",
          borderRight: "1px solid darkgray",
          display: "flex",
          flexDirection: "column",
          gap: "36px",
        }}
      >
        <TextField
          id="dish-query"
          label="Dish query"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RamenDining />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="ingredient-query"
          label="Ingredient query"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Egg />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Divider
          sx={{
            mb: "48px",
          }}
        />
        <Button
          onClick={callApi}
          variant="outlined"
          startIcon={<ManageSearch />}
        >
          Generate Recipe
        </Button>
      </Box>
    </Drawer>
  );
}
