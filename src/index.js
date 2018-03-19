import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/example" component={App} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
