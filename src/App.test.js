import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home component', () => {
  render(
      <App />
  );
  const homeElement = screen.getByText(/Job Portal/i);
  expect(homeElement).toBeInTheDocument();
});