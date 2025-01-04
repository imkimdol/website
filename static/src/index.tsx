import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Website from './Website';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);