import { Box, Typography } from "@mui/material";

export default function Title() {
  return (
    <Box className="title-container">
      <Typography
        variant="h1"
        sx={{
          fontSize: "calc(0.5rem + 2.5vw)",
        }}
      >
        Generate a Recipe!
      </Typography>
    </Box>
  );
}
