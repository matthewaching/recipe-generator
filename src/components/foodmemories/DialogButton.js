import PropTypes from "prop-types";
import { Button, Typography, Box } from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import React, { useState } from "react";
import DialogPopup from "./DialogPopup";

export default function DialogButton({ currentItem, setCurrentItem }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "12rem",
          width: "25vw",
          minWidth: "12rem",
          alignSelf: "center",
          borderRadius: "13rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <Restaurant />
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Add
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          Memory
        </Typography>
      </Button>
      <DialogPopup
        open={open}
        setOpen={setOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        buttonFunction="post"
      />
    </React.Fragment>
  );
}

DialogButton.propTypes = {
  currentItem: PropTypes.object,
  setCurrentItem: PropTypes.func,
};
