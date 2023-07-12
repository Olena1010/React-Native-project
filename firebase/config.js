import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-mG90VLFL29WYlHt4Dw2oD_FUBXOuYm0",
  authDomain: "native-hm.firebaseapp.com",
  projectId: "native-hm",
  storageBucket: "native-hm.appspot.com",
  messagingSenderId: "353351912577",
  appId: "1:353351912577:web:7X0jyWXY5s02vIrukwYb",
};



export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);

