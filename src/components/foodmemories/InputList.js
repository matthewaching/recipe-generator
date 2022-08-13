import Table from "./Table";
import InputFields from "../foodmemories/InputFields";
import { useState } from "react";
<<<<<<< HEAD

export default function InputList() {
  const [currentItem, setCurrentItem] = useState({
    name: "",
    date: "",
    meal: "",
    cooked: "",
    index: 0,
  });

  const [itemArray, setArray] = useState([]);

=======
import PropTypes from "prop-types";

export default function InputList({ currentDb }) {
  if (!currentDb) return;

  const idArray = (() => {
    if (!currentDb.dishes) return 0;
    return Object.keys(currentDb.dishes);
  })();

  const startId = (() => {
    const numArray = idArray
      .map((id) => Number(id))
      .sort((a, b) => (a > b ? -1 : 1));
    return numArray[0] + 1;
  })();

  const [currentItem, setCurrentItem] = useState({
    dishid: startId,
  });

>>>>>>> fb-database
  return (
    <div className="inputs-table-container">
      <InputFields
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
<<<<<<< HEAD
        itemArray={itemArray}
        setArray={setArray}
=======
        currentDb={currentDb}
>>>>>>> fb-database
      />
      <Table
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
<<<<<<< HEAD
        itemArray={itemArray}
        setArray={setArray}
=======
        currentDb={currentDb}
        idArray={idArray}
>>>>>>> fb-database
      />
    </div>
  );
}
<<<<<<< HEAD
=======

InputList.propTypes = {
  currentDb: PropTypes.object,
};
>>>>>>> fb-database
