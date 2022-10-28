import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Leaderboard } from './components';
import { Error, Dashboard } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='leaderboard' element={<Leaderboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
