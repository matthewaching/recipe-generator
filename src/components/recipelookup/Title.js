import { Box, Typography } from "@mui/material";

export default function Title() {
  return (
    <Box className="title-container">
      <Typography
        variant="h1"
        sx={{
          fontSize: "4rem",
        }}
      >
        Generate a Recipe!
      </Typography>
    </Box>
  );
}
