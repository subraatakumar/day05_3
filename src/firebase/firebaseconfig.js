// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcFCLpKfoyRiPHkrRTlqxYSpiI_90Yl0o",
  authDomain: "tasklist-516e6.firebaseapp.com",
  databaseURL: "https://tasklist-516e6-default-rtdb.firebaseio.com",
  projectId: "tasklist-516e6",
  storageBucket: "tasklist-516e6.appspot.com",
  messagingSenderId: "383812303448",
  appId: "1:383812303448:web:a4960a363a55c944f7282d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;

export const databaseURL = firebaseConfig.databaseURL;
