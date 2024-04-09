// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCu9gPFfd-PvRFC1avDUwYBjqLQgiI58UQ",
//   authDomain: "best-project-46c88.firebaseapp.com",
//   projectId: "best-project-46c88",
//   storageBucket: "best-project-46c88.appspot.com",
//   messagingSenderId: "785930164390",
//   appId: "1:785930164390:web:b2b50ac32cbc199741bc67"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAXyK-POjgbktOXIhp2xv9meEGeMEShfbE",
    authDomain: "erentalassistance-5d966.firebaseapp.com",
    projectId: "erentalassistance-5d966",
    storageBucket: "erentalassistance-5d966.appspot.com",
    messagingSenderId: "810187808033",
    appId: "1:810187808033:web:478dde9c61f6ebae133260"
  };



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const store = getStorage(app)
//export default app