import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmNUHSYAwO33LTF6oOV2wPQ_RfW25ZTzo",
  authDomain: "perla-libros.firebaseapp.com",
  projectId: "perla-libros",
  storageBucket: "perla-libros.appspot.com",
  messagingSenderId: "954643915682",
  appId: "1:954643915682:web:e2c1332cbbf3d8e9cfc8fb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)