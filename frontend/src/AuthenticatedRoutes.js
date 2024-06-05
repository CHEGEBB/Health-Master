import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/UserProfile';
import HealthGoals from './pages/HealthGoals';
import SymptomChecker from './pages/SymptomChecker';
import Medication from './pages/Medication';
import Appointments from './pages/Appointments';
import Settings from './pages/Settings';

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/healthgoals" element={<HealthGoals />} />
        <Route path="/symptomchecker" element={<SymptomChecker />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
