import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB52h3YHfw6ye30ygFHCuiSLmFNUG_8yPs",
    authDomain: "strategy-114fa.firebaseapp.com",
    databaseURL: "https://strategy-114fa.firebaseio.com",
    projectId: "strategy-114fa",
    storageBucket: "strategy-114fa.appspot.com",
    messagingSenderId: "1035689970026",
    appId: "1:1035689970026:web:ed501f857bd67e85cebd13",
    measurementId: "G-PGMJD20HD0"
  };

export default firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
