import { Box, Typography } from "@mui/material";
import DialogButton from "./DialogButton";
export default function Hero({ currentItem, setCurrentItem, currentDb }) {
  return (
    <Box
      className="hero-box"
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <Box
        className="hero-content"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          px: "10vw",
        }}
      >
        <Box
          className="hero-main"
          sx={{
            display: "flex",
            alignSelf: "stretch",
          }}
        >
          <Box
            className="text-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              maxWidth: "50vw",
              textAlign: "left",
              mr: "auto",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
              }}
            >
              Matt&apos;s
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
              }}
            >
              Food
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: "5rem",
              }}
            >
              Memories
            </Typography>
          </Box>
          <DialogButton
            currentItem={currentItem}
            setCurrentItem={setCurrentItem}
            currentDb={currentDb}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
          }}
        >
          A digital record of tasty or otherwise memorable dishes I have
          experienced in my culinary journey.
        </Typography>
      </Box>
    </Box>
  );
}
