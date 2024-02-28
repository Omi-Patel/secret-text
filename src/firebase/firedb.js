import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANa3iIZ-jx4yj8PI4KlW-f91n0K4t_bEI",
  authDomain: "secret-text-1650f.firebaseapp.com",
  projectId: "secret-text-1650f",
  storageBucket: "secret-text-1650f.appspot.com",
  messagingSenderId: "673799519115",
  appId: "1:673799519115:web:0479908624c995201ecd8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireDB = getFirestore(app);
