import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIRBEASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const importJSON = async () => {
  try {
    const data = require("/../data/data.json");
    for await (const item of data) {
      for (const key in item.thumbnail) {
        for (const subKey in item.thumbnail[key]) {
          item.thumbnail[key][subKey] = "";
        }
      }
      item.isBookmarked = item.isBookmarked ?? false;
      item.isTrending = item.isTrending ?? false;
      console.log("Adding item:", item);
      await addDoc(collection(db, "items"), item);
    }
    console.log("Data imported successfully");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export { db };
