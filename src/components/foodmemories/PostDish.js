import { getDatabase, ref, set } from "firebase/database";

export default function postDish(currentItem) {
  const db = getDatabase();
  set(ref(db, "dishes/" + currentItem.dishid), {
    ...currentItem,
  });
}
