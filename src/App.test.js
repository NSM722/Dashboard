/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Testing the rendering of App - you can add this to all components
test('Rendering of App', () => {
  render(<App />);
});

// Testing for element by text on the screen
expect(screen.getByText('Customers')).toBeInTheDocument();

// Testing components rendered in App
test('the rendering of components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('Pagination')).toBeInDocument();
  expect(getByTestId('Customers')).toBeInDocument();
});