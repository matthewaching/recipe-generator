import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  Pagination,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import CollapseRow from "./CollapseRow";

export default function DisplayTable({
  currentItem,
  setCurrentItem,
  currentDb,
  idArray,
}) {
  if (!idArray) return;
  console.log(idArray);
  const [currentPage, setPage] = useState(1);
  const pageContents = idArray.slice((currentPage - 1) * 5, currentPage * 5);
  const pageObjects = pageContents.map((dishId) => {
    return currentDb.dishes[dishId];
  });

  const changePage = (e, pageNum) => {
    setPage(pageNum);
  };

  return (
    <div className="table-container">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name of Dish:</TableCell>
            <TableCell>Date:</TableCell>
            <TableCell>Location:</TableCell>
            <TableCell>Edit</TableCell>
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
    </div>
  );
}

DisplayTable.propTypes = {
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
};
