import React from 'react';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Autotest</h1>
        </header>

        <Navigation />

        <footer> @2020 </footer>
      </div>
    </Router >
  );
}

export default App;
