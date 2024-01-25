import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyDKnlKDtt3ZnbvtHd8O1SC5CGtKSbTYNxU",
    authDomain: "date-night-ratings.firebaseapp.com",
    projectId: "date-night-ratings",
    storageBucket: "date-night-ratings.appspot.com",
    messagingSenderId: "370102290885",
    appId: "1:370102290885:web:9e856444253f07719423ac",
    measurementId: "G-Z2SNHJ25FB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)



