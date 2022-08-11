import { Collapse, Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CollapseRow({ item }) {
  const { dishid, name, date, type, meal, cooked } = item;

  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <tr className="itemTable" key={dishid} onClick={() => setOpen(!open)}>
        <td>{name}</td>
        <td>{date}</td>
        <td>{type}</td>
        <td>{meal}</td>
        <td>{cooked}</td>
      </tr>
      <tr>
        <Collapse in={open}>
          <Box>
            <Typography>Testing Collapse?</Typography>
          </Box>
        </Collapse>
      </tr>
    </React.Fragment>
  );
}
