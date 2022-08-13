import { Dialog, Button } from "@mui/material";
import { postDish, editDish } from "./dbDish";
import { Restaurant } from "@mui/icons-material";

export default function ItemDialog({
  open,
  setOpen,
  currentItem,
  setCurrentItem,
  buttonFunction,
  savedId,
}) {
  const searchInput = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.id]: e.target.value,
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (buttonFunction === "post") postDish(currentItem);
    if (buttonFunction === "edit") editDish(currentItem);
    setCurrentItem({
      dishid: currentItem.dishid + 1,
    });
    setOpen(false);
  };

  function handleClose() {
    if (savedId) {
      setCurrentItem({
        dishid: savedId,
      });
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose}>
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
            placeholder='"e.g: Spaghetti and meatballs"'
          ></input>
          <label htmlFor="date">Date:</label>
          <input
            type="text"
            id="date"
            value={currentItem.date}
            onChange={searchInput}
            placeholder='"e.g: MM/DD/YY"'
          ></input>
          <label htmlFor="type">Type:</label>
          <input
            type="text"
            id="type"
            value={currentItem.type}
            onChange={searchInput}
            placeholder='"e.g: Entree"'
          ></input>
          <label htmlFor="meal">Meal:</label>
          <input
            type="text"
            id="meal"
            value={currentItem.meal}
            onChange={searchInput}
            placeholder='"e.g: Lunch"'
          ></input>
          <label htmlFor="cooked">Cooked:</label>
          <input
            type="text"
            id="cooked"
            value={currentItem.cooked}
            onChange={searchInput}
            placeholder="Yes/No"
          ></input>
        </div>
        <Button variant="outlined" startIcon={<Restaurant />} type="submit">
          Add Memory
        </Button>
      </form>
    </Dialog>
  );
}
