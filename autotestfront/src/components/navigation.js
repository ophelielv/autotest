import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './navigation.css';

import Suite from '../scenes/suite'
import Home from '../scenes/home'

function Navigation() {

  return (
    <div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/suite">Suite</Link></li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/suite"><Suite /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </div>
  );
}

export default Navigation;