import InputList from "../../src/components/foodmemories/InputList";
import Title from "../../src/components/foodmemories/Title";
<<<<<<< HEAD

export default function FoodMemories() {
  return (
    <div className="App">
      <Title />
      <InputList />
=======
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { db } from "../../src/firebase-config";

export default function FoodMemories() {
  const url = "https://foodmemories-6b5eb-default-rtdb.firebaseio.com/";

  const [currentDb, setDb] = useState();

  useEffect(() => {
    return onValue(ref(db), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      setDb(data);
    });
  }, []);

  // One-time run GET function
  // async function getSnapshot() {
  //   const db = getDatabase();
  //   const snapshot = await get(ref(db));
  //   const data = snapshot.val();
  //   return data;
  // }

  // (async () => {
  //   const notTemp = await getSnapshot();
  //   console.log(notTemp);
  // })();

  return (
    <div className="App food-mem">
      <Title />
      <InputList currentDb={currentDb} />
>>>>>>> fb-database
    </div>
  );
}
