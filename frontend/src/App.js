import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import Signup from './authpages/Signup';

function App() {
  return (
    <div className="App">
    
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Signup />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
