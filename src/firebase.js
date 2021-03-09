// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBe0NqUfEGfRN1uC3d7dYpQXqMABFuNzwc",
    authDomain: "clone-6bd56.firebaseapp.com",
    projectId: "clone-6bd56",
    storageBucket: "clone-6bd56.appspot.com",
    messagingSenderId: "152989608458",
    appId: "1:152989608458:web:fbd4a27c98ceade3384df3",
    measurementId: "G-GKKX6W12KD"
  };

  firebase.initializeApp(firebaseConfig);
var Auth =firebase.auth()
  export default Auth;