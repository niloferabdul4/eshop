

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvuUthZaQAA9rIy9cLgBjREUet6tId34U",
  authDomain: "ecommerce-app-6b3ff.firebaseapp.com",
  projectId: "ecommerce-app-6b3ff",
  storageBucket: "ecommerce-app-6b3ff.appspot.com",
  messagingSenderId: "204887453425",
  appId: "1:204887453425:web:9b114b1fa9f8d5a4344350",
  measurementId: "G-1EK4RXCD9K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);     // initialize app with firebaseConfig //
//const analytics = getAnalytics(app);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp)                     // inialize database
export {db,auth};
