import './index.css';

import {Final} from './Components/About/Final';
import { Main } from './Components/Demo/Main';
import MainContact from './Components/ContactPages/MainContact';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Final></Final>
  </React.StrictMode>
);

reportWebVitals();
