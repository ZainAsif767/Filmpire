import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, Movies, MovieInformation, NavBar, Profile } from './Components';

export default function App() {
  return (
    <div className="#">
      <CssBaseline />
      <NavBar />
      <main className="#">
        <div className="#" />
        <Routes>
          <Route exact path="/movies/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path={['/', '/approved']} element={<Movies />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}
