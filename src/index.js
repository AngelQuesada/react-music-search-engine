import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MusicProvider } from './context/MusicProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MusicProvider>
      <App />
    </MusicProvider>
  </React.StrictMode>
);
