import DisplayTable from "./DisplayTable";
import { Box } from "@mui/material";
import InputFields from "../foodmemories/InputFields";
import { useState } from "react";
import PropTypes from "prop-types";

export default function InputList({
  currentDb,
  currentItem,
  setCurrentItem,
  idArray,
}) {
  return (
    <Box
      className="inputs-table-container"
      sx={{
        backgroundColor: "lightblue",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        px: "15rem",
        pt: "3rem",

        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <DisplayTable
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
        idArray={idArray}
      />
    </Box>
  );
}

InputList.propTypes = {
  currentDb: PropTypes.object,
};
