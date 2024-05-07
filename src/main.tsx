import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';  // Ensure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root')!);  // Non-null assertion
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
