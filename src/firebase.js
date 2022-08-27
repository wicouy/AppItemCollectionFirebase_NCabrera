import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBMTug1hG702sK6ScwC4I1_uqOmCP2RM1I",
  authDomain: "cursoreactjs-7ffa9.firebaseapp.com",
  projectId: "cursoreactjs-7ffa9",
  storageBucket: "cursoreactjs-7ffa9.appspot.com",
  messagingSenderId: "853147728285",
  appId: "1:853147728285:web:3845d48306a93ab675d774"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)