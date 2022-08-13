import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA7LHyfPQ0mjyNMXYItDwnaWpEYAewg6to",
  authDomain: "foodmemories-6b5eb.firebaseapp.com",
  projectId: "foodmemories-6b5eb",
  storageBucket: "foodmemories-6b5eb.appspot.com",
  messagingSenderId: "109282309473",
  appId: "1:109282309473:web:c7eb64c83effe7a61dc120",
  databaseURL: "https://foodmemories-6b5eb-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
