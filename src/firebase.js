import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_DwPAt9UEQtP3W11Blt6AjLf8-eK-Jxs",
  authDomain: "whatsapp-clone-d992f.firebaseapp.com",
  projectId: "whatsapp-clone-d992f",
  storageBucket: "whatsapp-clone-d992f.appspot.com",
  messagingSenderId: "833748230738",
  appId: "1:833748230738:web:668875b9ea2448e275358b",
  measurementId: "G-Y74LM8P3SS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export {auth,provider};
export default db;
