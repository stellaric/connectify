import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Importez Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDxsUrKzYrf48Ed1QOBTFMnbuS8oG8WNG0",
  authDomain: "connectify-ea829.firebaseapp.com",
  projectId: "connectify-ea829",
  storageBucket: "connectify-ea829.appspot.com",
  messagingSenderId: "842078954396",
  appId: "1:842078954396:web:171d95e8d35656d87cde59"
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp); // Initialisation de Firestore

export { auth, db }; // Exportez les objets auth et db
