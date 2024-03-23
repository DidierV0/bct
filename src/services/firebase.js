// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth} from 'firebase/auth' ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4bZwJCexlpGik-TlqfODqg9hKerMGjcQ",
    authDomain: "boudin-creole-toulouse.firebaseapp.com",
    projectId: "boudin-creole-toulouse",
    storageBucket: "boudin-creole-toulouse.appspot.com",
    messagingSenderId: "413842260586",
    appId: "1:413842260586:web:e31fe44ddc01bdccec0013",
    measurementId: "G-W3930WL653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const dbFirestore = getFirestore(app) ;

export const storage  =getStorage(app) ;

export const auth = getAuth(app) ;
