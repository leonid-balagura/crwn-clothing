import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl2qad-QynSrQLuGSGCB1CT8MVnSmdT-s",
  authDomain: "crwn-clothing-3fed4.firebaseapp.com",
  projectId: "crwn-clothing-3fed4",
  storageBucket: "crwn-clothing-3fed4.appspot.com",
  messagingSenderId: "410392673938",
  appId: "1:410392673938:web:ce9845bb4617d34748304b",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
