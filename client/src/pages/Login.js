import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { firebase } from '../config/firebase';
import '../CSS/Login.css';

function Login() {
  // form inputs
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');

  // use to route within function
  const history = useHistory();

  // ANONYMOUS : change to/add user+password
  // async function anonymousSignIn() {
  //   await firebase
  //     .auth()
  //     .signInAnonymously()
  //     .then(() => {
  //       firebase.auth().onAuthStateChanged(user => {
  //         if (user) {
  //           // User is signed in, see docs for a list of available properties
  //           // https://firebase.google.com/docs/reference/js/firebase.User
  //           console.log('successful auth as user ' + user.uid);
  //           localStorage.setItem('userUid', user.uid);
  //           history.push('/terminal');
  //         } else {
  //           // User is signed out
  //         }
  //       });
  //     })
  //     .catch(error => {
  //       var errorCode = error.code;
  //       var errorMessage = error.message;
  //       console.log('error sign in: ' + error);
  //     });
  // }

  //Sign in with Email and password
  function handleForm(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        history.replace('/home');
        setError('');
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }

  function handleInput(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="login">
      <div className="login-cover">
        <div className="login-wrapper">
          <div className="login-form">
            <h1 className="login-header">LogIn</h1>
            <form onSubmit={handleForm}>
              {err !== '' && <p className="err-message">{err}</p>}
              <input
                type="email"
                className="input-field"
                name="email"
                placeholder="Email or Phone Number"
                value={form.email}
                onChange={handleInput}
              />
              <input
                type="password"
                className="input-field"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleInput}
              />
              <button type="submit" className="login-button">
                {isLoading ? 'Logging in' : 'Log In'}
              </button>
            </form>
            <div className="sign-up-new">
              <span>New Here?</span>
              <Link className="signup-link" to="/SignUp">
                SignUp Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
