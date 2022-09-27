import { render, screen } from '@testing-library/react';
import Customers from './Customers';

// Testing that the component renders a h2 element with the role as a heading
test('Displays heading by role', () => {
  render(<Customers />);
  const headerElement = screen.getByRole('heading');
  expect(headerElement).toBeInTheDocument();
});

/*Testing by findByRole to ensure the Customers component
 * is rendered after the API call
 */
test('Customers component shows a cards of customers', async () => {
  render(<Customers />);
  const customers = await screen.findByRole('div');
  expect(customers).toBeInTheDocument();
});