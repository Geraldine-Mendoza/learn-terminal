import React from "react";
import { useHistory } from "react-router-dom";
import { auth, firebase } from "./firebase";

function Login() {
  // use to route within function
  const history = useHistory();

  // ANONYMOUS : change to/add user+password
  async function anonymousSignIn() {
    await firebase.auth().signInAnonymously()
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log("successful auth as user " + user.uid);
            localStorage.setItem("userUid", user.uid);
            history.push("/terminal");
          } else {
            // User is signed out
          }
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error sign in: " + error);
      });
  }


  return (
    <div>
      <button onClick={anonymousSignIn} className="login-button">
        Sign In
      </button>
    </div>
  );
}

export default Login;

