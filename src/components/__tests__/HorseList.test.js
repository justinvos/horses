import { render, screen } from '@testing-library/react';
import { HorseList } from '../HorseList';

test('renders Thunderdash item', () => {
  render(<HorseList />);
  const thunderdashItem = screen.getByText('Thunderdash');

  expect(thunderdashItem).toBeInTheDocument();
});

test('renders Potoo item', () => {
  render(<HorseList />);
  const potooItem = screen.getByText('Potoo');

  expect(potooItem).toBeInTheDocument();
});
