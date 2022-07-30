function Table({ itemArray }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item Index:</th>
          <th>Name of Dish:</th>
          <th>Date Experienced:</th>
          <th>Mealtime:</th>
          <th>Cooked?</th>
        </tr>
      </thead>
      <tbody>
        {itemArray.map((item) => {
          const { index, name, date, meal, cooked } = item;
          return (
            <tr>
              <td>{index}</td>
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

export default Table;
