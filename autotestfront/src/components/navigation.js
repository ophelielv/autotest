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
        <li>Suites
          <ul>
            {suites.map(suite =>
              <li>
                <Link to={`/suite/${suite.id}`}>{suite.name}</Link>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;