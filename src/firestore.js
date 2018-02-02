import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAIhRRfxH0Q4E_jC4iExVF9Vg-MvD1v0JY",
    authDomain: "fb-counter-4bac6.firebaseapp.com",
    databaseURL: "https://fb-counter-4bac6.firebaseio.com",
    projectId: "fb-counter-4bac6",
    storageBucket: "fb-counter-4bac6.appspot.com",
    messagingSenderId: "1070937410513"
  };

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;