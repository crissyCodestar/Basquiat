import React from 'react';
import ReactDOM from 'react-dom';
import 'grommet/grommet.min.css';
import '../node_modules/grommet-css';
import '../node_modules/grommet/scss/vanilla/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
