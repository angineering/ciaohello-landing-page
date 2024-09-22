import React from 'react';
import Logo from './static/images/logo.png';
import './App.css';
import { Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './Main'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar variant="dark" expand="lg" className="App-navbar" fixed="top">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            APP NAME
          </Navbar.Brand>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path="/privacy">
              <Privacy />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </main>
        <footer>
            <Link to='contact'>Contact</Link>
            <Link to='privacy'>Privacy Policy</Link>
            <Link to='terms'>Terms & Conditions</Link>
            <p>&copy; COMPANY 2020</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
