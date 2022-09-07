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
import Title from "/src/components/recipelookup/Title";

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
    <>
      <Title />
      <Box
        sx={{
          flex: "1",
          padding: "24px 6px 0 6px",
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
        <Button
          onClick={callApi}
          variant="outlined"
          startIcon={<ManageSearch />}
          sx={{
            mt: "auto",
            mb: "1rem",
          }}
        >
          Generate Recipe
        </Button>
      </Box>
    </>
  );
}
