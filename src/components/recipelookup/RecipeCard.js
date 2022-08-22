import { useState } from "react";
import {
  styled,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

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

  const prepTime = (() => {
    const prepMin = recipe.readyInMinutes;
    const prepHours = Math.floor(prepMin / 60);
    const remainderMin = prepMin - prepHours * 60;
    if (!prepHours) return `Preparation Time: ${remainderMin} minutes`;
    return `Preparation Time: ${prepHours} hours and ${remainderMin} minutes`;
  })();

  return (
    <Card sx={{ minWidth: 345, maxWidth: 450 }}>
      <CardHeader title={recipe.title} subheader={prepTime} />
      <CardMedia
        component="img"
        height="194"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardActions disableSpacing>
        <ExpandMore
          expand={ingredExpand}
          onClick={expandIngred}
          aria-expanded={ingredExpand}
          aria-label="show more"
        >
          <Typography>Ingredients</Typography>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={ingredExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
            <ul>
              {recipe.extendedIngredients.map((ingredient) => {
                return (
                  <li
                    key={ingredient.id}
                    // >{`${ingredient.measures.us.amount} ${ingredient.unit} ${ingredient.name}`}</li>
                  >
                    {ingredient.original}
                  </li>
                );
              })}
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <ExpandMore
          expand={instructExpand}
          onClick={expandInstruct}
          aria-expanded={instructExpand}
          aria-label="show more"
        >
          <Typography>Instructions</Typography>

          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={instructExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary" align="left">
            <List>
              {recipe.analyzedInstructions[0].steps.map((instruction) => {
                return (
                  <ListItem key={instruction.number}>
                    {`${instruction.number}. ${instruction.step}`}
                  </ListItem>
                );
              })}
            </List>
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <ExpandMore
          expand={linkExpand}
          onClick={expandLink}
          aria-expanded={linkExpand}
          aria-label="show more"
        >
          <Typography>Source</Typography>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={linkExpand} timeout="auto" unmountOnExit>
        <Divider />
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
