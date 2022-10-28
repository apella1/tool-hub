import { render, screen } from '@testing-library/react';
import { Navbar } from './components';

test('renders leaderboard link', () => {
  render(<Navbar />);
  const linkElement = screen.getByText('Leaderboard');
  expect(linkElement).toBeInTheDocument();
});

// test parameters - description and a function 
