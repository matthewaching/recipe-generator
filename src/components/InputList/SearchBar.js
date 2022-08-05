import PropTypes from "prop-types";

function Searchbar({ currentItem, setCurrentItem, itemArray, setArray }) {
  const searchInput = (e) => {
    console.log();
    setCurrentItem({
      ...currentItem,
      [e.target.id]: e.target.value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    console.table(currentItem);
    setArray([...itemArray, currentItem]);
    setCurrentItem({
      name: "",
      date: "",
      meal: "",
      cooked: "",
      index: currentItem.index + 1,
    });
  };

  return (
    <form className="searchbar" onSubmit={addItem}>
      {/* Should consider pulling this component out of the parent and creating a child template with 
        onChange passed as a prop. Would simplify code if multiple text-based inputs are required. */}
      <label htmlFor="name">Item Name:</label>
      <input
        type="text"
        id="name"
        value={currentItem.name}
        onChange={searchInput}
      ></input>
      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        value={currentItem.date}
        onChange={searchInput}
      ></input>
      <label htmlFor="meal">Meal:</label>
      <input
        type="text"
        id="meal"
        value={currentItem.meal}
        onChange={searchInput}
      ></input>
      <label htmlFor="cooked">Cooked:</label>
      <input
        type="text"
        id="cooked"
        value={currentItem.cooked}
        onChange={searchInput}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

Searchbar.propTypes = {
  currentItem: PropTypes.object,
  setCurrentItem: PropTypes.object,
  itemArray: PropTypes.object,
  setArray: PropTypes.object,
};

export default Searchbar;
