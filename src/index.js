import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // We only need Router here, no Routes/Route in index.js

// Create the root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Wrap the entire app in BrowserRouter */}
    <Router>
      <App /> {/* App contains the Routes */}
    </Router>
  </React.StrictMode>
);
