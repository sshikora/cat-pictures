import React from 'react';
import ReactDOM from 'react-dom';
import CatImage2 from '../CatImage2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatImage2 />, div);
});
