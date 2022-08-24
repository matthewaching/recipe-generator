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
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMe = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
}));

function ExpandToggle(props) {
  const { expand, section, ...other } = props;
  if (expand)
    return (
      <IconButton>
        <Typography>{section}</Typography>
        <ExpandLess {...other} aria-label="show more" />
      </IconButton>
    );
  return (
    <IconButton>
      <Typography>{section}</Typography>
      <ExpandMore {...other} aria-label="show more" />
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
    <Card sx={{ width: 450 }}>
      <CardHeader title={recipe.title} subheader={prepTime} />
      <CardMedia
        component="img"
        height="235"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardActions onClick={expandIngred}>
        <ExpandToggle
          expand={ingredExpand}
          aria-expanded={ingredExpand}
          section="Ingredients"
        ></ExpandToggle>
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
        <ExpandToggle
          expand={instructExpand}
          aria-expanded={instructExpand}
          section="Instructions"
        ></ExpandToggle>
      </CardActions>
      <Collapse in={instructExpand} timeout="auto" unmountOnExit>
        <CardContent>
          <InstructList />
        </CardContent>
      </Collapse>
      <Divider />
      <CardActions onClick={expandLink}>
        <ExpandToggle
          expand={linkExpand}
          aria-expanded={linkExpand}
          section="Source"
        ></ExpandToggle>
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
