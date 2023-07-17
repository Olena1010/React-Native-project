import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyAkjp_BlHh1vzxKUvltx7J-S8WMao2bCYY",
//   authDomain: "native-hm.firebaseapp.com",
//   projectId: "native-hm",
//   storageBucket: "native-hm.appspot.com",
//   messagingSenderId: "353351912577",
//   appId: "1:353351912577:web:7X0jyWXY5s02vIrukwYb",
// };

const firebaseConfig = {
  apiKey: "AIzaSyB00Vh1Z5Sj4JYYG5Ub9K08HijgRQaMtvw",
  authDomain: "react-native-hw-2023-4a8a8.firebaseapp.com",
  // databaseURL: "https://react-native-hw-2023-4a8a8-default-rtdb.firebaseio.com",
  projectId: "react-native-hw-2023-4a8a8",
  storageBucket: "react-native-hw-2023-4a8a8.appspot.com",
  messagingSenderId: "879374673971",
  appId: "1:879374673971:web:9439e0e681a36ede325b46",
  measurementId: "G-TQC5FDW0S9"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore(app);
// export const analytics = getAnalytics(app);

