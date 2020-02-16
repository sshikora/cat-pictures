import React from 'react';
import ReactDOM from 'react-dom';
import CatImageShow from '../CatImageShow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatImageShow />, div);
});
