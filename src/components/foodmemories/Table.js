import PropTypes from "prop-types";
import { getDatabase, ref, onValue } from "firebase/database";
import { database } from "../../firebase-config";
import { useEffect } from "react";

export default function Table({ itemArray }) {
  return (
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
      {/* <tbody>
        {itemArray.map((item) => {
          const { dishid, name, date, meal, cooked } = item;
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
      </tbody> */}
    </table>
  );
}

Table.propTypes = {
  itemArray: PropTypes.array,
};
