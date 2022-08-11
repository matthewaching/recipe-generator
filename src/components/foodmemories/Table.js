import PropTypes from "prop-types";
import { useState } from "react";
import { Pagination, Container } from "@mui/material";

export default function Table({ currentDb, idArray }) {
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
            const { dishid, name, date, meal, type, cooked } = item;
            return (
              <tr className="itemTable" key={dishid}>
                <td>{name}</td>
                <td>{date}</td>
                <td>{type}</td>
                <td>{meal}</td>
                <td>{cooked}</td>
              </tr>
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
  );
}

Table.propTypes = {
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
};
