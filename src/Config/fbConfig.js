import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2iF7OrzGQntQTVLKHsCGLIBcjpTidBQQ",
  authDomain: "tatsube-marioplan.firebaseapp.com",
  databaseURL: "https://tatsube-marioplan.firebaseio.com",
  projectId: "tatsube-marioplan",
  storageBucket: "",
  messagingSenderId: "121699341521",
  appId: "1:121699341521:web:2a185c995c893415"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
