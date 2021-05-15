import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import HeroImage from '../images/heroImage.svg';
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
    <div className="signup">
      <div className="signup-left">
        <img src={HeroImage} alt="heroImage" className="hero-image" />
      </div>
      <div className="signup-right">
        <div className="signup-container">
          <div className="signup-form">
            <div className={err ? 'signup-header remove-padding' : 'signup-header'}>SignUp</div>
            <div className="signup-fields">
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
                  <button type="submit" className="signup-button">
                    {isLoading ? 'Signing Up' : 'SignUp'}
                  </button>
                </div>
              </form>
            </div>
            <div className="sign-up-new">
              <span>Already a User?</span>
              <Link className="signup-link" to="/login">
                Log In!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
