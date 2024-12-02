import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Ongoing from '../pages/Projects/Ongoing'; // Example page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ongoing" element={<Ongoing />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
