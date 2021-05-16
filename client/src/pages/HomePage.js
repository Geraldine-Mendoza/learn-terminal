import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { firebase } from '../config/firebase';
import { sendServerInfo } from '../helper/serverInfo'
import * as Constants from '../Constants';
import '../CSS/HomePage.css';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  //ANONYMOUS authentication
  async function anonymousSignIn() {
    if(isLoading) return;
    setIsLoading(true);
    await firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            console.log('successful auth as user ' + user.uid);
            history.push('/terminal');
          } else {
            // User is signed out
          }
          setIsLoading(false);
        });
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error sign in: ' + error);
        setIsLoading(false);
      });
  }

  return (
    <div>
      {/* space for navbar -- for some reason needed in deployment, dont remove! */}
      <div style={{height: '80px'}}></div>
      <div className="section">
        <div>Hack with Terminal</div>
        <div className="basic-info">{Constants.BASIC_INFO}</div>
        <div className="button-container">
          <button onClick={anonymousSignIn} className='auth-button'>
            {isLoading ? 'Loading...' : 'Quick Start'}</button>
          <Link to="/signup">
            <button className='auth-button'>Sign Up</button>
          </Link>
        </div>
      </div>

    </div>
  );
}
