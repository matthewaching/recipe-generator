import { Box, Typography } from "@mui/material";
import InputFields from "./InputFields";
export default function Hero({ currentItem, setCurrentItem, currentDb }) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        pt: "2rem",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        backgroundColor: "white",
        gap: "7rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          m: "1rem",
          maxWidth: "50vw",
        }}
      >
        <Typography
          variant="h1"
          className="title"
          sx={{
            wordWrap: "break-word",
          }}
        >
          Matt&apos;s
        </Typography>
        <Typography
          variant="h1"
          className="title"
          sx={{
            wordWrap: "break-word",
          }}
        >
          Food
        </Typography>
        <Typography
          variant="h1"
          className="title"
          sx={{
            wordWrap: "break-word",
          }}
        >
          Memories
        </Typography>
      </Box>
      <InputFields
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
      />
    </Box>
  );
}
