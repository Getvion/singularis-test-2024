import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'normalize.css';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
