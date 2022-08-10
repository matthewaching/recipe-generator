import Table from "./Table";
import InputFields from "../foodmemories/InputFields";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function InputList({ currentDb }) {
  if (!currentDb) return;

  const startId = (() => {
    const idArray = Object.keys(currentDb.dishes);
    const numArray = idArray
      .map((id) => Number(id))
      .sort((a, b) => (a > b ? -1 : 1));
    console.log(numArray);
    return numArray[0];
  })();

  const [currentItem, setCurrentItem] = useState({
    dishid: startId + 1,
    name: "",
    date: "",
    type: "",
    meal: "",
    cooked: "",
  });

  return (
    <div className="inputs-table-container">
      <InputFields
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
      />
      <Table
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
      />
    </div>
  );
}

InputList.propTypes = {
  currentDb: PropTypes.object,
};
