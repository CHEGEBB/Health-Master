import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import Signup from './authpages/Signup';
import Login from './authpages/Login';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import Sidenav from './components/Sidenav';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AuthenticatedApp />} />
      </Routes>
    </Router>
  );
};

const AuthenticatedApp = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className="App">
      {!isAuthRoute && (
        <div className="side-navbar">
          <Sidenav />
        </div>
      )}
      <div className="main-app">
        <AuthenticatedRoutes />
      </div>
    </div>
  );
};

export default App;
