import PropTypes from "prop-types";
<<<<<<< HEAD

export default function Table({ itemArray }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name of Dish:</th>
          <th>Date:</th>
          <th>Mealtime:</th>
          <th>Cooked?</th>
        </tr>
      </thead>
      <tbody>
        {itemArray.map((item) => {
          const { index, name, date, meal, cooked } = item;
          return (
            <tr className="itemTable" key={index}>
              <td>{name}</td>
              <td>{date}</td>
              <td>{meal}</td>
              <td>{cooked}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
=======
import React, { useState } from "react";
import { Pagination } from "@mui/material";

import CollapseRow from "./CollapseRow";

export default function Table({
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
      <table>
        <thead>
          <tr>
            <th>Name of Dish:</th>
            <th>Date:</th>
            <th>Location:</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {pageObjects.map((item) => {
            return (
              <CollapseRow
                item={item}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
              />
            );
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
>>>>>>> fb-database
  );
}

Table.propTypes = {
<<<<<<< HEAD
  itemArray: PropTypes.array,
=======
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
>>>>>>> fb-database
};
