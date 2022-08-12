import { Collapse, Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

export default function CollapseRow({ item }) {
  const { dishid, name, date, type, meal, cooked } = item;
  console.log(item);
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <tr className="itemTable" key={dishid} onClick={() => setOpen(!open)}>
        <td>
          <Link
            href={{
              pathname: "/foodmemories/detailedview",
              query: { dish: `${dishid}` },
            }}
          >
            <a>{name}</a>
          </Link>
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
