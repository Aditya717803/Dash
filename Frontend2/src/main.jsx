import React from 'react'; // Importing React
import { StrictMode } from 'react'; // Importing StrictMode for highlighting potential problems
import { createRoot } from 'react-dom/client'; // Importing createRoot for rendering the app
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing your CSS styles

// Creating a root element and rendering the App component within StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
