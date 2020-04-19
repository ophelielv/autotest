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
      <ul className="level-1">
        <li className="link-1 link-hover" key="link-home"><Link to="/">Home</Link></li>
        <li className="link-1" key="suites-title">Suites
          <ul className="level-2">
            {suites.map((suite, idx) =>
              <li className="link-hover" key={`suite-${idx}`}>
                <Link className="link-2" to={`/suite/${suite.id}`} key={`link-suite-${suite.id}`}>{suite.name}</Link>
              </li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;