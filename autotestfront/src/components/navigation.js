import React from 'react';
import { Link } from "react-router-dom";
import './navigation.css';

function Navigation(props) {
  const suites = [
    {
      id: 1, name: 'Suite 1',
    },
    {
      id: 2, name: 'Suite 2',
    }
  ]
  return (
    <nav className="App-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/suite">Suites</Link>
          <ul>
            {suites.map(suite => (
              <li key={suite.id}>
                <button>{suite.name}</button>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;