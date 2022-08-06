import PropTypes from "prop-types";

function Table({ itemArray }) {
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
  );
}

Table.propTypes = {
  itemArray: PropTypes.array,
};

export default Table;
