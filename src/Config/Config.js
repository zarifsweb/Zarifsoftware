import firebase from "firebase/app";

function CONFIG() {
  const DB_CONFIG = {
    apiKey: "AIzaSyCffYkllsCTgVlsDDGmKyFiByduN0rDRjA",
    authDomain: "nayeems-english-care.firebaseapp.com",
    databaseURL: "https://nayeems-english-care.firebaseio.com",
    projectId: "nayeems-english-care",
    storageBucket: "nayeems-english-care.appspot.com",
    messagingSenderId: "240472520672",
    appId: "1:240472520672:web:0667c64868fb619ce01d85",
  };
  return !firebase.apps.length
    ? firebase.initializeApp(DB_CONFIG)
    : firebase.app();
}

export default CONFIG;
