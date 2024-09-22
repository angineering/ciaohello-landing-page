import React from 'react';
import Logo from './static/images/logo.png';
import './App.css';
import { Navbar } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  HashRouter
} from "react-router-dom";

import Main from './Main'
import Contact from './Contact'
import Privacy from './Privacy'
import Terms from './Terms'

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navbar variant="dark" expand="lg" className="App-navbar" fixed="top">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={Logo}
              width="120"
              height="40"
              className="d-inline-block align-top"
              style={{ marginLeft: '10px' }}
            />{' '}
            {/* Chatty */}
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
            <p>&copy; ABRL Limited 2024</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;