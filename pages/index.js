import { Box, Typography } from "@mui/material";
import { DinnerDining, ManageSearch } from "@mui/icons-material";
import Link from "next/link";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to my Food App!</h1>
      <h2>This app consists of two related projects:</h2>
      <Box
        sx={{
          display: "flex",
          gap: "48px",
          mb: "48px",
        }}
      >
        <Link href="/foodmemories">
          <Box
            sx={{
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "15px",
              height: "200px",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <DinnerDining fontSize="large" />
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Food Memories
              </Typography>
            </Box>
            <Typography>
              A database record of memorable dishes I have eaten or cooked
            </Typography>
            <Typography></Typography>
          </Box>
        </Link>
        <Link href="/recipelookup">
          <Box
            sx={{
              cursor: "pointer",
              border: "2px solid black",
              borderRadius: "15px",
              height: "200px",
              width: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <ManageSearch fontSize="large" />
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                Recipe Generator
              </Typography>
            </Box>
            <Typography>
              A tool that queries a recipe API for a random entry
            </Typography>
            <Typography></Typography>
          </Box>
        </Link>
      </Box>
      <Typography variant="body1">
        This app was constructed with React inside a Next.js framework.
      </Typography>
      <Typography variant="body1">
        Material UI libraries were utilized for frontend design.
      </Typography>
      <Typography variant="body1">
        The app is hosted on Firebase Hosting with Realtime Database.
      </Typography>
    </div>
  );
}
