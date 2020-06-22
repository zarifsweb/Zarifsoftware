import firebase from "firebase/app";
import "firebase/storage";

const DB_CONFIG = {
  apiKey: "AIzaSyCffYkllsCTgVlsDDGmKyFiByduN0rDRjA",
  authDomain: "nayeems-english-care.firebaseapp.com",
  databaseURL: "https://nayeems-english-care.firebaseio.com",
  projectId: "nayeems-english-care",
  storageBucket: "nayeems-english-care.appspot.com",
  messagingSenderId: "240472520672",
  appId: "1:240472520672:web:0667c64868fb619ce01d85",
};

firebase.initializeApp(DB_CONFIG);
const storage = firebase.storage();

export { storage, firebase as default };
