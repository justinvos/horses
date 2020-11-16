import { render, screen } from '@testing-library/react';
import { HorseDialog } from '../HorseDialog';
import * as HorseContext from '../HorseContext';

jest.mock('../HorseContext');

test('renders Thunderdash and Potoo items', () => {
  const activeHorse = {
    id: '4c486040-a10c-4bb2-a56e-055d1eb29397',
    name: 'Thunderdash',
    profile: {
      favouriteFood: 'Hot Chips',
      physical: {
        height: 200,
        weight: 450
      }
    }
  };

  HorseContext.useHorses.mockReturnValue({ activeHorse });

  render(<HorseDialog />);
  const nameTextfield = screen.getByLabelText('Name');
  const favouriteFood = screen.getByLabelText('Favourite food');

  expect(nameTextfield).toBeInTheDocument();
  expect(favouriteFood).toBeInTheDocument();
});