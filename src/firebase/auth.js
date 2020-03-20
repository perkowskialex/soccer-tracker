import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var provider = new firebase.auth.GoogleAuthProvider();

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCEQv2BR7ROlBiDsSYRm3y3YGPlfQEiwjE",
  authDomain: "soccer-tracker-15803.firebaseapp.com",
  databaseURL: "https://soccer-tracker-15803.firebaseio.com",
  projectId: "soccer-tracker-15803",
  storageBucket: "soccer-tracker-15803.appspot.com",
  messagingSenderId: "797322082187",
  appId: "1:797322082187:web:a81cd1fe409f001c42a18e",
  measurementId: "G-9018LK54MS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const googleSignIn = firebase
  .auth()
  .signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // check for user
    console.log("Sign In Success");
    console.log("User is:", user);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("Error occurred:", errorCode, errorMessage);
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });

export const googleSignOut = firebase
  .auth()
  .signOut()
  .then(function() {
    // Sign-out successful.
    console.log("Sign Out Successful");
  })
  .catch(function(error) {
    // An error happened.
    console.log("error signing out");
  });
