import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClowyp3KPdLAHN7-A9YY4bzQ2UpRY8Mbc",
    authDomain: "todo-react-firebase-4c59d.firebaseapp.com",
    projectId: "todo-react-firebase-4c59d",
    storageBucket: "todo-react-firebase-4c59d.appspot.com",
    messagingSenderId: "623208414365",
    appId: "1:623208414365:web:bd713e1d4f00266c3ca874"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };