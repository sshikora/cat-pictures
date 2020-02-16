import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import CatImage2 from '../CatImage2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatImage2 />, div);
});

it('renders Breed Name', () => {
  const { getByText } = render(<CatImage2 />);
  const element = getByText(/Breed Name/i);
  expect(element).toBeInTheDocument();
});

it('renders Life Span', () => {
  const { getByText } = render(<CatImage2 />);
  const element = getByText(/Life Span/i);
  expect(element).toBeInTheDocument();
});

it('renders Image Url', () => {
  const { getByText } = render(<CatImage2 />);
  const element = getByText(/Image Url/i);
  expect(element).toBeInTheDocument();
});
