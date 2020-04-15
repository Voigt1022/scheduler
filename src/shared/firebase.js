import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyB48CGMrqrydJybU1oWK7TvxsmXIpEmd1Q",
  authDomain: "scheduler-1b938.firebaseapp.com",
  databaseURL: "https://scheduler-1b938.firebaseio.com",
  projectId: "scheduler-1b938",
  storageBucket: "scheduler-1b938.appspot.com",
  messagingSenderId: "701762541056",
  appId: "1:701762541056:web:b47a22ea068e1147c72ae5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;