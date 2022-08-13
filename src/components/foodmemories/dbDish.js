import { ref, set, update } from "firebase/database";
import { db } from "../../firebase-config";

export function postDish(currentItem) {
  set(ref(db, "dishes/" + currentItem.dishid), {
    ...currentItem,
  });
}
export function editDish(currentItem) {
  update(ref(db, "dishes/" + currentItem.dishid), {
    ...currentItem,
  });
}
