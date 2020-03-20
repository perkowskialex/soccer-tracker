import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var provider = new firebase.auth.GoogleAuthProvider();

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

export const googleSignInWithRedirect = firebase
  .auth()
  .signInWithRedirect(provider);

export const googleSignOut = firebase
  .auth()
  .signOut()
  .then(function() {
    // Sign-out successful.
  })
  .catch(function(error) {
    // An error happened.
  });
