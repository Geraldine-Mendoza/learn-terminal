import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { firebase } from '../config/firebase';
import HeroImage from '../images/heroImage.svg';
import '../CSS/Login.css';

function Login() {
  // form inputs
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');

  // use to route within function
  const history = useHistory();

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
      <div className="login-left">
        <img src={HeroImage} alt="heroImage" className="hero-image" />
      </div>
      <div className="login-right">
        <div className="login-container">
          <div className="login-form">
            <div className={err ? 'login-header remove-padding' : 'login-header'}>LogIn</div>
            <div className="login-fields">
              <form onSubmit={handleForm}>
                {err !== '' && <p className="err-message">{err}</p>}
                <input
                  type="email"
                  className="input-field"
                  name="email"
                  placeholder="Email"
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
                <div className="button-container">
                  <button type="submit" className="login-button">
                    {isLoading ? 'Logging in' : 'Login'}
                  </button>
                </div>
              </form>
            </div>
            <div className="sign-up-new">
              <span>New Here?</span>
              <Link className="signup-link" to="/signup">
                SignUp Now!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
