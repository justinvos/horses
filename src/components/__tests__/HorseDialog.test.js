import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HorseDialog } from '../HorseDialog';
import * as HorseContext from '../HorseContext';

jest.mock('../HorseContext');

test('renders Thunderdash\'s data is in the dialog\'s textfields', () => {
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

  expect(nameTextfield).toHaveValue('Thunderdash');
  expect(favouriteFood).toHaveValue('Hot Chips');
});

test('form is editable and submittable', () => {
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

  const updateHorse = jest.fn();

  HorseContext.useHorses.mockReturnValue({ activeHorse, updateHorse });

  render(<HorseDialog />);
  const nameTextfield = screen.getByLabelText('Name');

  userEvent.type(nameTextfield, 'er');

  expect(nameTextfield).toHaveValue('Thunderdasher');
  expect(favouriteFood).toHaveValue('Hot Chips');

  const submitButton = screen.getByText('Update horse');

  userEvent.click(submitButton);

  expect(updateHorse).toBeCalledTimes(1);

  const newHorse = {
    ...activeHorse,
    name: 'Thunderdasher'
  };
  expect(updateHorse).toBeCalledWith(newHorse);
});
