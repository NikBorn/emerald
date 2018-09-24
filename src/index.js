import './index.css';
import App from './App';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createHashHistory from 'history/createHashHistory';

const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });

ReactDOM.render(
  <Router history={hashHistory}>
    <App />
  </Router>,
  document.getElementById('root')
);