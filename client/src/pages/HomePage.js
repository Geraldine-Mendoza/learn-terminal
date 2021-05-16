import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { firebase } from '../config/firebase';
import * as Constants from '../Constants';
import '../CSS/HomePage.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  //ANONYMOUS authentication
  async function anonymousSignIn() {
    if (isLoading) return;
    setIsLoading(true);
    await firebase
      .auth()
      .signInAnonymously()
      .then(res => {
        localStorage.setItem('signIn', 'anon');
        history.push('/terminal');
        setIsLoading(false);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error sign in: ' + errorCode + errorMessage);
        setIsLoading(false);
      });
  }

  return (
    <div>
      {/* space for navbar -- for some reason needed in deployment, dont remove! */}
      <div style={{ height: '80px' }}></div>
      <div className="section">
        <div>
          <h1 className="heading">Hack with Terminal</h1>
        </div>

        <div className="basic-info">{Constants.BASIC_INFO}</div>
        <div className="button-container">
          <button onClick={anonymousSignIn} className="auth-button">
            {isLoading ? 'Loading...' : 'Quick Start'}
          </button>
        </div>

        <br></br>
        <hr></hr>
        <h1 className="bash-heading">BASH</h1>
        <div className="bash-info">
          {Constants.BASH_INFO}

          <div className="bash">
            <button className="bash-button">
              <Link to="/bash" className="bash-link" style={{ textDecoration: 'none' }}>
                Try bash Commands
              </Link>
            </button>
          </div>
        </div>

        <img
          className="bash-img"
          alt="img"
          src="https://miro.medium.com/max/4136/1*1BRXRhpRvv9jsxm0YIJbVA.png"
        ></img>
      </div>

      <br></br>
      <hr></hr>
      <h1 className="bash-heading">GIT</h1>
      <div className="bash-info">
        {Constants.GIT_INFO}

        <div className="bash">
          <button className="bash-button">
            <Link to="/git" className="bash-link" style={{ textDecoration: 'none' }}>
              Try GIT Commands
            </Link>
          </button>
        </div>
      </div>

      <img
        className="bash-img"
        alt="img"
        src="https://www.tutsmake.com/wp-content/uploads/2020/01/Essential-git-commands-every-developer-should-know.jpeg"
      ></img>
    </div>
  );
}
