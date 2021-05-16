import React, { useContext } from 'react';
import Logo from '../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import '../CSS/Navbar.css';
import AppContext from '../config/AppContext';
import { firebase } from '../config/firebase';

export default function Navbar() {
  const [isLoggedIn] = useContext(AppContext);
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(res => {
        history.replace('/login');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="custom-navbar">
      <div className="nav-left">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="nav-logoCaption">hackwithterminal</div>
      </div>
      <div className="nav-right">
        <div className="tab-container">
          <Link to="/bash" className="tab">
            Bash
          </Link>
          <Link to="/git" className="tab">
            Git
          </Link>
          <Link to="/terminal" className="tab">
            Terminal
          </Link>
          {isLoggedIn ? (
            <Link className="tab" onClick={logout}>
              LogOut
            </Link>
          ) : (
            <Link to="/login" className="tab">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
