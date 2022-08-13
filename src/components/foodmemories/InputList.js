import Table from "./Table";
import InputFields from "../foodmemories/InputFields";
import { useState } from "react";
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
        idArray={idArray}
      />
    </div>
  );
}

InputList.propTypes = {
  currentDb: PropTypes.object,
};
