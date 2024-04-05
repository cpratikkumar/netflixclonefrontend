import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4kembO6ErgLy9xNyEfGftLXhVq9ZiR-w",
  authDomain: "netflix-clone-fca57.firebaseapp.com",
  projectId: "netflix-clone-fca57",
  storageBucket: "netflix-clone-fca57.appspot.com",
  messagingSenderId: "1066413035161",
  appId: "1:1066413035161:web:e23253656bd4965f3d3208",
  measurementId: "G-4RG83EBLEP",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
