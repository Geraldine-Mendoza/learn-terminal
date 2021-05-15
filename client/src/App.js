import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { firebase } from './config/firebase';

import Terminal from './pages/Terminal';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedin, setIsloggedin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user.uid);
        localStorage.setItem('uid', user.uid);
        setIsloggedin(true);
      } else {
        //for logout
        setUser({});
        localStorage.removeItem('uid');
        setIsloggedin(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path={'/terminal'}>
            <Terminal />
          </Route>
          {/* Redirecting non-matches to home */}
          <Route render={() => <Redirect to="/" />}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
