import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzBY18jm3cEWDK5DdfC8w3-lAs0LmniBs",
  authDomain: "test-ev01.firebaseapp.com",
  databaseURL: "https://test-ev01.firebaseio.com",
  projectId: "test-ev01",
  storageBucket: "test-ev01.appspot.com",
  messagingSenderId: "1087731968950",
  appId: "1:1087731968950:web:910603f796ba6ff0412f17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;
