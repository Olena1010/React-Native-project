import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-mG90VLFL29WYlHt4Dw2oD_FUBXOuYm0",
  authDomain: "native-88836.firebaseapp.com",
  projectId: "native-88836",
  storageBucket: "native-88836.appspot.com",
  messagingSenderId: "580769975903",
  appId: "1:580769975903:web:cce03ojk9kdqggotojbc00dc7p5o7g7s",
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);