import React from "react";
import { auth, firebase } from "./firebase";

function Login() {
  // ANONYMOUS : change to/add user+password
  async function anonymousSignIn() {
    await firebase.auth().signInAnonymously()
      .then(() => {
        // Signed in..
        console.log("successful sign in");
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

