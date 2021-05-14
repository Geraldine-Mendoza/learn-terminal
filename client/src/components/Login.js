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
        // Signed in..
        auth.currentUser.getIdToken(true)
        .then(token => {
          console.log("successful auth as user " + token);
          // save token to localStorage (can also send through url if easier)
          localStorage.setItem("userToken", token);
          // route to new page
          history.push("/terminal");
        })
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

