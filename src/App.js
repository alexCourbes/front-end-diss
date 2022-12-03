import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import HomePage from './Pages/HomePage.js';

function App() {
  return (

        <BrowserRouter>
            <Routes>
        <Route path="/" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>

  );
}

export default App;
