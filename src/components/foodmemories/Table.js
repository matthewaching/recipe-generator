import PropTypes from "prop-types";

export default function Table({ currentDb, idArray }) {
  const firstPage = idArray.slice(0, 5);
  const firstObjects = firstPage.map((dishId) => {
    return currentDb.dishes[dishId];
  });

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
      <tbody>
        {firstObjects.map((item) => {
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
  );
}

Table.propTypes = {
  currentDb: PropTypes.object,
  idArray: PropTypes.array,
};
