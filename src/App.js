import React from 'react';
import './App.css';
import { Router } from'@reach/router';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Color from './components/Color';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path = "/home" />
        <Hello path = "/:input" />
        <Color path = "/:word/:color/:bg" />
      </Router>
    </div>
  );
}

export default App;
