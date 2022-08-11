import PropTypes from "prop-types";
import React, { useState } from "react";
import { Pagination } from "@mui/material";

import CollapseRow from "./CollapseRow";

export default function Table({ currentDb, idArray }) {
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
      <table>
        <thead>
          <tr>
            <th>Name of Dish:</th>
            <th>Date:</th>
            <th>Type of Dish:</th>
            <th>Mealtime:</th>
            <th>Cooked:</th>
          </tr>
        </thead>
        <tbody>
          {pageObjects.map((item) => {
            return <CollapseRow item={item} />;
          })}
        </tbody>
      </table>
      <Pagination
        count={10}
        variant="outlined"
        page={currentPage}
        onChange={changePage}
      />
    </div>
  );
}

Table.propTypes = {
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
};
