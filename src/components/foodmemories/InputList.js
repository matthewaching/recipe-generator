import Table from "./Table";
import InputFields from "../foodmemories/InputFields";
import { useState } from "react";

function InputList() {
  const [currentItem, setCurrentItem] = useState({
    name: "",
    date: "",
    meal: "",
    cooked: "",
    index: 0,
  });

  const [itemArray, setArray] = useState([]);

  return (
    <div className="inputs-table-container">
      <InputFields
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        itemArray={itemArray}
        setArray={setArray}
      />
      <Table
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        itemArray={itemArray}
        setArray={setArray}
      />
    </div>
  );
}

export default InputList;
