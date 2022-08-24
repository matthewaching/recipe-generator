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

export default function SideBar({
  dishQuery,
  ingredQuery,
  setDishQuery,
  setIngredQuery,
  callApi,
}) {
  const dishInput = (e) => {
    setDishQuery(e.target.value);
  };

  const ingredInput = (e) => {
    setIngredQuery(e.target.value);
  };

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
          onChange={dishInput}
          value={dishQuery}
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
          onChange={ingredInput}
          value={ingredQuery}
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
