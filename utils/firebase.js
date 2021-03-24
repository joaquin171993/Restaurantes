import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCrgRCFO0XY5guMlt5HbbApIjHjXPuHYys",
    authDomain: "restaurantes-d1442.firebaseapp.com",
    projectId: "restaurantes-d1442",
    storageBucket: "restaurantes-d1442.appspot.com",
    messagingSenderId: "237883468841",
    appId: "1:237883468841:web:b150c0a2296b9e07174038"
  };

  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);