import { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Divider,
  IconButton,
  Typography,
  ListItem,
  List,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

function ToggleExpand({ expand, section }) {
  if (expand)
    return (
      <IconButton>
        <Typography>{section}</Typography>
        <ExpandLess />
      </IconButton>
    );
  return (
    <IconButton>
      <Typography>{section}</Typography>
      <ExpandMore />
    </IconButton>
  );
}

function RecipeCard({ recipe }) {
  const [ingredExpand, setIngredExpand] = useState(false);
  const [instructExpand, setInstructExpand] = useState(false);
  const [linkExpand, setLinkExpand] = useState(false);

  const expandIngred = () => {
    setIngredExpand(!ingredExpand);
  };

  const expandInstruct = () => {
    setInstructExpand(!instructExpand);
  };

  const expandLink = () => {
    setLinkExpand(!linkExpand);
  };

  function InstructList() {
    if (!recipe.analyzedInstructions[0].steps)
      return <Typography>No Instructions Provided</Typography>;
    return (
      <Typography variant="body2" color="text.secondary" align="left">
        <List
          sx={{
            pt: 0,
            pb: 0,
            mt: "-1rem",
          }}
        >
          {recipe.analyzedInstructions[0].steps.map((instruction) => {
            return (
              <ListItem key={instruction.number}>
                {`${instruction.number}. ${instruction.step}`}
              </ListItem>
            );
          })}
        </List>
      </Typography>
    );
  }

  const prepTime = (() => {
    const prepMin = recipe.readyInMinutes;
    const prepHours = Math.floor(prepMin / 60);
    const remainderMin = prepMin - prepHours * 60;
    if (!prepHours) return `Preparation Time: ${remainderMin} minutes`;
    return `Preparation Time: ${prepHours} hours and ${remainderMin} minutes`;
  })();

  return (
    <Card
      elevation="4"
      sx={{
        flex: 1,
      }}
    >
      <CardHeader title={recipe.title} subheader={prepTime} />
      <CardMedia
        component="img"
        height="300"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardActions onClick={expandIngred}>
        <ToggleExpand
          expand={ingredExpand}
          section="Ingredients"
        ></ToggleExpand>
      </CardActions>
      <Collapse in={ingredExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
            <List
              sx={{
                listStyleType: "disc",
                pl: "2rem",
                pt: 0,
                pb: 0,
                mt: "-1rem",
              }}
            >
              {recipe.extendedIngredients.map((ingredient) => {
                return (
                  <ListItem
                    key={ingredient.id}
                    disableGutters
                    sx={{ display: "list-item" }}
                  >
                    {ingredient.original}
                  </ListItem>
                );
              })}
            </List>
          </Typography>
        </CardContent>
      </Collapse>
      <Divider />
      <CardActions onClick={expandInstruct}>
        <ToggleExpand
          expand={instructExpand}
          section="Instructions"
        ></ToggleExpand>
      </CardActions>
      <Collapse in={instructExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <InstructList />
        </CardContent>
      </Collapse>
      <Divider />
      <CardActions onClick={expandLink}>
        <ToggleExpand expand={linkExpand} section="Source"></ToggleExpand>
      </CardActions>
      <Collapse in={linkExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <a href={recipe.spoonacularSourceUrl}>Link to original recipe</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function EmptyCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title=""
        subheader="Please press the button to generate a recipe."
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {recipe.extendedIngredients.map((ingredient) => {
            return (
              <li>{`${ingredient.measures.us.amount} ${ingredient.unit} ${ingredient.name}`}</li>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <a href={recipe.spoonacularSourceUrl}>Link to original recipe</a>
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}

export { RecipeCard, EmptyCard };
