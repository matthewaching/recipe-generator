import { Collapse, Box, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ItemDialog from "./ItemDialog";

export default function CollapseRow({ item, currentItem, setCurrentItem }) {
  const { dishid, name, date, location, city } = item;
  console.log(item);
  const [rowOpen, setRowOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [savedId, setSavedId] = useState();

  function EditItem() {
    setSavedId(currentItem.dishid);
    setCurrentItem({
      ...item,
    });
    setDialogOpen(true);
  }

  return (
    <React.Fragment>
      <tr
        className="itemTable"
        key={dishid}
        onClick={() => setRowOpen(!rowOpen)}
      >
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
        <td>
          {location} ({city})
        </td>
        <td onClick={EditItem}>V</td>
      </tr>
      <tr>
        <Collapse in={rowOpen}>
          <Box>
            <td>Testing</td>
          </Box>
        </Collapse>
      </tr>
      <ItemDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        item={item}
        buttonFunction="edit"
        savedId={savedId}
      />
    </React.Fragment>
  );
}
