import './index.css';

import { App } from './App';
import {Final} from './Components/About/Final';
import { Main } from './Components/Demo/Main';
import MainCards from './Components/Project/MainCards';
import MainContact from './Components/ContactPages/MainContact';
import { ProjectVideo } from './Components/Project/ProjectVideo';
import Project_Final from './Components/Project/Project_Final';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<App></App>
  </React.StrictMode>
);

reportWebVitals();
