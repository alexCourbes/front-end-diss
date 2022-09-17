import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import HomePage from './Pages/HomePage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage/>
      </header>
    </div>
  );
}

export default App;
