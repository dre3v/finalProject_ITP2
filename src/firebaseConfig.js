import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'

import { getAuth } from 'firebase/auth'
import "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCN3bwWKDM3vuv1-ikqD38AlRGLNMk6FW8",
  authDomain: "final-project-14c82.firebaseapp.com",
  projectId: "final-project-14c82",
  storageBucket: "final-project-14c82.appspot.com",
  messagingSenderId: "732539998816",
  appId: "1:732539998816:web:10d0a73816fb86b19ba905",
  measurementId: "G-JP104J9NKL"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const auth = getAuth();

export { app, auth, database }