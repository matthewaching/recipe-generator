import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../../src/firebase-config";

export default function DetailedView() {
  const router = useRouter();

  const [pageItem, setItem] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const query = router.query;
    return onValue(ref(db), (querySnapShot) => {
      let data = querySnapShot.val() || {};
      setItem(data.dishes[router.query.dish]);
      console.log(data.dishes[router.query.dish]);
    });
  }, [router.isReady, router.query]);

  if (!pageItem) return;

  return (
    <div className="App">
      <h1>{pageItem.name}</h1>
      <p>Date: {pageItem.date}</p>
      <p>Location: {pageItem.location}</p>
      <p>City: {pageItem.city}</p>
      <p>Mealtime: {pageItem.meal}</p>
      <p>Type of Dish: {pageItem.type}</p>
    </div>
  );
}
