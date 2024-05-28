import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Signup from './authpages/Signup';
import Login from './authpages/Login';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';


const AuthenticatedRoutes=()=> {
  return (
    <div className="App">
      <Router>
        <div className="side-navbar">
          <Sidenav />
        </div>
        <div className="main-app">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<AuthenticatedRoutes />} />
    </Routes>
  </Router>
  );
};

export default App;
