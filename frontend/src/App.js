import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Signup from './authpages/Signup';
import Login from './authpages/Login';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="side-navbar">
          <Sidenav />
        </div>
        <div className="main-app">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
