import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { firebase } from '../config/firebase';
import '../CSS/SignUp.css';
export default function SignUp() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState('');
  const history = useHistory();
  function handleForm(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(form.email, form.password)
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
    <div className="signUp">
      <div className="signUp-cover">
        <div className="signUp-wrapper">
          <div className="signUp-form">
            <h1 className="signUp-header">SignUp</h1>
            {err !== '' && <p>{err}</p>}
            <form onSubmit={handleForm}>
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
              <button type="submit" className="signUp-button">
                {isLoading ? 'Signing Up' : 'SignUp'}
              </button>
            </form>
            <div className="login-new">
              <span>Already have an account?</span>
              <Link className="login-link" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
