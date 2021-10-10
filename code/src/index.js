import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './fonts/univers_else_regular/UniversElse-Regular.ttf';

import App from './App';
import About from './About';
import Choose from './Choose';
import Grow from './forest/Grow';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/choose" exact>
            <Choose />
          </Route>
          <Route path="/grow/:tree" exact>
            <Grow />
          </Route>
          <Route path="/" exact>
            <App />
          </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);