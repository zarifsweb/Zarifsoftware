import * as firebase from "firebase";

  const DB_CONFIG = {
    apiKey: "AIzaSyDXMFsk0lAOQ_xAZIkfhc9uheoVKZT5s88",
    authDomain: "zarif-software.firebaseapp.com",
    databaseURL: "https://zarif-software.firebaseio.com",
    projectId: "zarif-software",
    storageBucket: "zarif-software.appspot.com",
    messagingSenderId: "38199309727",
    appId: "1:38199309727:web:fa3c0cb82e81050860b9aa"
  };
  firebase.initializeApp(DB_CONFIG);


export default firebase;
