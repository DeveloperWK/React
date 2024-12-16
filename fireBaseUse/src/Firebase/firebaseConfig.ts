// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD98NJbVv0JYP_FUJsHAijil68uulKOZ0M",
  authDomain: "myfirstreactproject-6ce7b.firebaseapp.com",
  projectId: "myfirstreactproject-6ce7b",
  storageBucket: "myfirstreactproject-6ce7b.firebasestorage.app",
  messagingSenderId: "287134783911",
  appId: "1:287134783911:web:12149e73de83de5030fe82",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
