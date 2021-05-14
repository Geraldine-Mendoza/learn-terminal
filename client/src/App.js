import logo from './logo.svg';

import Login from './components/Login'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* Redirecting non-matches to home */}
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
