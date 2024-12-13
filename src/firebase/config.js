
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZ0iWF8EcVltIU7YYwdsrD0SyMXuhsZc8",
  authDomain: "entregafinal3-21105.firebaseapp.com",
  projectId: "entregafinal3-21105",
  storageBucket: "entregafinal3-21105.firebasestorage.app",
  messagingSenderId: "470325613906",
  appId: "1:470325613906:web:1db836de53f8ded939d68b",
  measurementId: "G-DFEQ5JHCEL"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
