import PropTypes from "prop-types";
import { Button, Dialog } from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import React, { useState } from "react";
import ItemDialog from "./ItemDialog";

export default function InputFields({ currentItem, setCurrentItem }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        startIcon={<Restaurant />}
        onClick={() => setOpen(true)}
        sx={{
          alignSelf: "center",
          fontWeight: "strong",
          borderRadius: "20px",
        }}
      >
        Add Memory
      </Button>
      <ItemDialog
        open={open}
        setOpen={setOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        buttonFunction="post"
      />
    </React.Fragment>
  );
}

InputFields.propTypes = {
  currentItem: PropTypes.object,
  setCurrentItem: PropTypes.func,
};
