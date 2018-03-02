import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
