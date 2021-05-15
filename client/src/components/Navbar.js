import React from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
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
          <Link to="/login" className="tab">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
