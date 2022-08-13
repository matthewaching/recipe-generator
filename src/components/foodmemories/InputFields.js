import PropTypes from "prop-types";
<<<<<<< HEAD

export default function InputFields({
  currentItem,
  setCurrentItem,
  itemArray,
  setArray,
}) {
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
      <div className="input-container">
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
      </div>
      <button type="submit">Record Memory</button>
    </form>
=======
import { Button, Dialog } from "@mui/material";
import { Restaurant } from "@mui/icons-material";
import React, { useState } from "react";
import ItemDialog from "./ItemDialog";

export default function InputFields({ currentItem, setCurrentItem }) {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Button
        variant="contained"
        startIcon={<Restaurant />}
        onClick={() => setOpen(true)}
        sx={{
          alignSelf: "center",
          fontWeight: "strong",
          borderRadius: "20px",
        }}
      >
        Add Memory
      </Button>
      <ItemDialog
        open={open}
        setOpen={setOpen}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        buttonFunction="post"
      />
    </React.Fragment>
>>>>>>> fb-database
  );
}

InputFields.propTypes = {
  currentItem: PropTypes.object,
  setCurrentItem: PropTypes.func,
<<<<<<< HEAD
  itemArray: PropTypes.array,
  setArray: PropTypes.func,
=======
>>>>>>> fb-database
};
