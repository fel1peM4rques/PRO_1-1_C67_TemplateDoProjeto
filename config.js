import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDNhW2wQCTxWjUbdSuUl72bmEk_AdBPQ4A",
  authDomain: "projeto67-5e54c.firebaseapp.com",
  databaseURL: "https://projeto67-5e54c-default-rtdb.firebaseio.com",
  projectId: "projeto67-5e54c",
  storageBucket: "projeto67-5e54c.appspot.com",
  messagingSenderId: "388944172008",
  appId: "1:388944172008:web:0f62ce4aaf6262103cca5d"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();