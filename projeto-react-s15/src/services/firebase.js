// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2YJsjY_BWabdTXzV6P7P0RyleVl-HsUE",
  authDomain: "projeto-react-reprograma.firebaseapp.com",
  databaseURL: "https://projeto-react-reprograma-default-rtdb.firebaseio.com",
  projectId: "projeto-react-reprograma",
  storageBucket: "projeto-react-reprograma.appspot.com",
  messagingSenderId: "918802944915",
  appId: "1:918802944915:web:2e3827a1d6b717fd690e66"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const dataBase = getDateBase()

export default dataBase