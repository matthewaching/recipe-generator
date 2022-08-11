import { Collapse, Box, Typography, Link } from "@mui/material";
import React, { useState } from "react";

export default function CollapseRow({ item }) {
  const { dishid, name, date, type, meal, cooked } = item;

  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <tr className="itemTable" key={dishid} onClick={() => setOpen(!open)}>
        <td>
          <Link href="/foodmemories/1">{name}</Link>
        </td>
        <td>{date}</td>
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
