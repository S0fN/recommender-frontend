// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TripInputPage from './pages/TripInputPage';
import ItineraryPage from './pages/ItineraryPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TripInputPage />} />
      <Route path="/itinerary" element={<ItineraryPage />} />
    </Routes>
  );
}

export default App;