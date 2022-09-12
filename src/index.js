import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

import { ThemeProvider } from './context/theme-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);
