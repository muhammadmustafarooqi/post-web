// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   // sendPasswordResetEmail, 
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBQ1vpxNtStGxf6vllhApngmUc_wOOi4rw",
//   authDomain: "post-web-117d8.firebaseapp.com",
//   projectId: "post-web-117d8",
//   storageBucket: "post-web-117d8.appspot.com",
//   messagingSenderId: "339707830",
//   appId: "1:339707830:web:6fbd5046d77d0474466317",
//   measurementId: "G-HL3HWZFMR6"
// };

// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);


// export {
//   app, auth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
//   // sendPasswordResetEmail, 
//   GoogleAuthProvider,
//   signInWithPopup,
// };

// export { db }
// export { auth, db, collection, addDoc, getDocs, deleteDoc, doc, signOut, onAuthStateChanged };


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

// ✅ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ1vpxNtStGxf6vllhApngmUc_wOOi4rw",
  authDomain: "post-web-117d8.firebaseapp.com",
  projectId: "post-web-117d8",
  storageBucket: "post-web-117d8.appspot.com",
  messagingSenderId: "339707830",
  appId: "1:339707830:web:6fbd5046d77d0474466317",
  measurementId: "G-HL3HWZFMR6"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export only **once** to prevent issues
export { app, auth, db, collection, addDoc, getDocs, deleteDoc, doc, signOut, onAuthStateChanged };
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup };
