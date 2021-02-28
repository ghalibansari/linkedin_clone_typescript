import firebase from 'firebase'
// import auth from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCwNqMN1Px34_ssUlvEfwNLARU3usXqSls",
  authDomain: "linkedin-clone-ca2d5.firebaseapp.com",
  projectId: "linkedin-clone-ca2d5",
  storageBucket: "linkedin-clone-ca2d5.appspot.com",
  messagingSenderId: "547994241079",
  appId: "1:547994241079:web:9ba5553c06f898705197b2"
};

const fireaBaseApp = firebase.initializeApp(firebaseConfig);

const db = fireaBaseApp.firestore();

const auth = firebase.auth();

export { db, auth };