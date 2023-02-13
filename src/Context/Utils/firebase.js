
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCTz2soJsizLS5lKzASqGZJHP-oorCeFzk",
  authDomain: "ecommerce-app-fac17.firebaseapp.com",
  projectId: "ecommerce-app-fac17",
  storageBucket: "ecommerce-app-fac17.appspot.com",
  messagingSenderId: "1053825972808",
  appId: "1:1053825972808:web:c2bb2268a14d72e4f2767d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);     // initialize app with firebaseConfig //
//const analytics = getAnalytics(app);
const auth=getAuth(firebaseApp);
const db=getFirestore(firebaseApp)                     // inialize database
export {db,auth};
