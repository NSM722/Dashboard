import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

// Testing that the component renders a nav element with the role
test('Displays navigation element by role', () => {
  render(<Pagination />);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});