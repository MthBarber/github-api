import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('Renders Home', () => {
  render(<App />);
  const home = screen.getByText(/Using the Github API/i);
  expect(home).toBeInTheDocument();
})
