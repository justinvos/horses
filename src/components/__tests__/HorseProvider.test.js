import { render, screen } from '@testing-library/react';
import { HorseProvider } from '../HorseContext';
import * as api from '../../api';
import { HorseList } from '../HorseList';

jest.mock('../../api');

test('renders Thunderdash and Potoo items', async () => {
  const horses = [{
    id: '1',
    name: 'Thunderdash'
  }, {
    id: '2',
    name: 'Potoo'
  }];

  api.getHorses.mockResolvedValue(horses)

  render(<HorseProvider><HorseList /></HorseProvider>);

  const thunderdashItem = await screen.findByText('Thunderdash');
  const potooItem = await screen.findByText('Potoo');

  expect(thunderdashItem).toBeInTheDocument();
  expect(potooItem).toBeInTheDocument();
});
