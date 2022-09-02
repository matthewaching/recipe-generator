import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Pagination,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Box,
  Card,
} from "@mui/material";

import CollapseRow from "./CollapseRow";

export default function MemoryTable({
  currentItem,
  setCurrentItem,
  currentDb,
  idArray,
}) {
  if (!idArray) return;
  console.log(idArray);
  const [currentPage, setPage] = useState(1);
  const pageContents = idArray.slice((currentPage - 1) * 10, currentPage * 10);
  const pageObjects = pageContents.map((dishId) => {
    return currentDb.dishes[dishId];
  });

  const changePage = (e, pageNum) => {
    setPage(pageNum);
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        pt: "3rem",

        display: "flex",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50vw",
          p: "24px",
          gap: "8px",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name of Dish:</TableCell>
              <TableCell>Date:</TableCell>
              <TableCell>Location:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageObjects.map((item) => {
              return (
                <CollapseRow
                  item={item}
                  currentItem={currentItem}
                  setCurrentItem={setCurrentItem}
                />
              );
            })}
          </TableBody>
        </Table>
        <Pagination
          count={10}
          variant="outlined"
          page={currentPage}
          onChange={changePage}
        />
      </Card>
    </Box>
  );
}

MemoryTable.propTypes = {
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
};
