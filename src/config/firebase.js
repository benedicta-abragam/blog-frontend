import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyCaBwBjZSgdw_anCqLeJ6HXnyzWHaQp4fI",
  authDomain: "blog-app-5efa3.firebaseapp.com",
  projectId: "blog-app-5efa3",
  storageBucket: "blog-app-5efa3.firebasestorage.app",
  messagingSenderId: "280871790434",
  appId: "1:280871790434:web:54dbf309780c4d71682e3b",
  measurementId: "G-KCEKV9PVVM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth 