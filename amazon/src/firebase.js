import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCS7ABJ5tjCl5yZ9UDT9-zBtYYBN3wPCC8",
  authDomain: "fir-4a2ae.firebaseapp.com",
  projectId: "fir-4a2ae",
  storageBucket: "fir-4a2ae.appspot.com",
  messagingSenderId: "296100496248",
  appId: "1:296100496248:web:9f3481310a56478693fe8d",
  measurementId: "G-Q4LLVQQH1W"
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore;
const auth=firebase.auth();
export {db, auth};