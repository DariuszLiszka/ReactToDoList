import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// add tests to every component (unit)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
