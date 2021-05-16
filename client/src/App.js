import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { firebase } from './config/firebase';
import { sendServerInfo } from './helper/serverInfo'

import Terminal from './pages/Terminal';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
import AppContext from './config/AppContext';
import './App.css';
import LearnPage from './pages/LearnPage';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedin, setIsloggedin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user.uid);
        localStorage.setItem('uid', user.uid);
        console.log(user.uid);
        sendServerInfo(true, user.uid)
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
        <AppContext.Provider value={[isLoggedin, user]}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            {/* TODO: make terminal variant of LearnPage so that terminal
            does not reset when change page on nav !!! */}
            <Route path='/bash'>
              <LearnPage type='bash' />
            </Route>
            <Route path='/git'>
              <LearnPage type='git' />
            </Route>
            <Route path={'/terminal'}>
              <Terminal />
            </Route>
            {/* Redirecting non-matches to home */}
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
