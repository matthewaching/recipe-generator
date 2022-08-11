import { getDatabase, ref, set } from "firebase/database";

export default function postDish(dishid, name, date, type, meal, cooked) {
  const db = getDatabase();
  set(ref(db, "dishes/" + dishid), {
    name: name,
    date: date,
    type: type,
    meal: meal,
    cooked: cooked,
  });
}
