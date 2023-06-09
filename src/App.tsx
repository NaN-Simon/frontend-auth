import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
}

export default App;
