import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyA7q6WkX0sreVmHyl-eJWdOrnYiQwTlQkQ",
  authDomain: "facebook-demo-19eca.firebaseapp.com",
  projectId: "facebook-demo-19eca",
  storageBucket: "facebook-demo-19eca.appspot.com",
  messagingSenderId: "188522451642",
  appId: "1:188522451642:web:6b01674277e68d62eb6883",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export { firebaseConfig };
export default db;
