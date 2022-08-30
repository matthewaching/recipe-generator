import { Collapse, Box, Typography, TableRow, TableCell } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ItemDialog from "./ItemDialog";

export default function CollapseRow({ item, currentItem, setCurrentItem }) {
  const { dishid, name, date, location, city, type, meal, cooked } = item;
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
    <>
      <TableRow
        className="itemTable"
        key={dishid}
        onClick={() => setRowOpen(!rowOpen)}
      >
        <TableCell>
          <Link
            href={{
              pathname: "/foodmemories/detailedview",
              query: { dish: `${dishid}` },
            }}
          >
            <a>{name}</a>
          </Link>
        </TableCell>
        <TableCell>{date}</TableCell>
        <TableCell>
          {location} ({city})
        </TableCell>
        <TableCell onClick={EditItem}>V</TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ pt: 0, pb: 0 }} colSpan={4}>
          <Collapse in={rowOpen}>
            <Box sx={{ pt: "1rem", pb: "1rem" }}>
              <Typography variant="body2">
                This dish was a {meal.toLowerCase()} {type.toLowerCase()}.
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <ItemDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        item={item}
        buttonFunction="edit"
        savedId={savedId}
      />
    </>
  );
}
