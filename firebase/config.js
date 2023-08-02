import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAd0cCCs6EyIyLPcDsm1LbcpHVvIUZFb5o",
  authDomain: "react-native-oo.firebaseapp.com",
  projectId: "react-native-oo",
  storageBucket: "react-native-oo.appspot.com",
  messagingSenderId: "280368873633",
  appId: "1:280368873633:web:d58f51429475eed928f0e0",
  measurementId: "G-BMC70XZTVB"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);


