import Table from "./Table";
import SearchBar from "./SearchBar";
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
    <div>
      <SearchBar
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
