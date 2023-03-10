import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Routes>
          <Route exact path="/movies/:id" element={<h1>Movie Information</h1>} />
          <Route exact path="/actors/:id" element={<h1>Actors</h1>} />
          <Route exact path="/" element={<h1>Movies</h1>} />
          <Route exact path="/profile/:id" element={<h1>Profile</h1>} />
        </Routes>
      </main>
    </div>
  );
}
