import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>
      <App />
    </h1>
  </React.StrictMode>
);


