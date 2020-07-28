// src/firebase.js
import firebase from 'firebase'
const config = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "todo-app-8a7cb.firebaseapp.com",
   databaseURL: "https://todo-app-8a7cb.firebaseio.com",
   projectId: "todo-app-8a7cb",
   storageBucket: "todo-app-8a7cb.appspot.com",
   messagingSenderId: "1086912155898",
   appId: "1:1086912155898:web:8ba4521f0015abe0a7f943"
};
firebase.initializeApp(config);
export default firebase;
