import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/UserProfile';
import HealthGoals from './pages/HealthGoals';
import Medication from './pages/Medication';
import Settings from './pages/Settings';
import VirtualAssistant from './pages/VirtualAssistant';
import Details from "./authpages/Details";


const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/healthgoals" element={<HealthGoals />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/virtualassistant" element={<VirtualAssistant />} />
        <Route path="/details" element={<Details />} />

        
    </Routes>
  );
};

export default AuthenticatedRoutes;
