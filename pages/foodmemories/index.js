import MemoryTable from "../../src/components/foodmemories/MemoryTable";
import Hero from "../../src/components/foodmemories/Hero";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../src/firebase-config";
import { Box } from "@mui/material";

export default function FoodMemories() {
  const url = "https://foodmemories-6b5eb-default-rtdb.firebaseio.com/";

  const [currentDb, setDb] = useState();

  useEffect(() => {
    return onValue(ref(db), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      setDb(data);
    });
  }, []);

  const idArray = (() => {
    if (!currentDb) return;
    if (!currentDb.dishes) return 0;
    return Object.keys(currentDb.dishes);
  })();

  const startId = (() => {
    if (!currentDb) return;
    const numArray = idArray
      .map((id) => Number(id))
      .sort((a, b) => (a > b ? -1 : 1));
    return numArray[0] + 1;
  })();

  const [currentItem, setCurrentItem] = useState({
    dishid: startId,
  });

  return (
    <Box
      className="food-mem"
      sx={{
        height: "100%",
        backgroundColor: "#caf0f8",
      }}
    >
      <Hero
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
      />
      <MemoryTable
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        currentDb={currentDb}
        idArray={idArray}
      />
    </Box>
  );
}
