import React from 'react';
import ReactDOM from 'react-dom';
import App from './MainNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
