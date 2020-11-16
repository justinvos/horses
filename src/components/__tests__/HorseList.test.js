import { render, screen } from '@testing-library/react';
import { HorseList } from '../HorseList';
import * as HorseContext from '../HorseContext';

jest.mock('../HorseContext');

test('renders Thunderdash and Potoo items', () => {
  const horses = [{
    name: 'Thunderdash'
  }, {
    name: 'Potoo'
  }];

  HorseContext.useHorses.mockReturnValue(horses);

  render(<HorseList />);
  const thunderdashItem = screen.getByText('Thunderdash');
  const potooItem = screen.getByText('Potoo');

  const listElement = screen.getByTestId('horse-list');

  expect(thunderdashItem).toBeInTheDocument();
  expect(potooItem).toBeInTheDocument();

  expect(listElement).toBeInTheDocument();
  expect(listElement.children).toHaveLength(2);
});

test('renders limit of ten horses', () => {
  const horses = [{
    name: 'Horse 1'
  }, {
    name: 'Horse 2'
  }, {
    name: 'Horse 3'
  }, {
    name: 'Horse 4'
  }, {
    name: 'Horse 5'
  }, {
    name: 'Horse 6'
  }, {
    name: 'Horse 7'
  }, {
    name: 'Horse 8'
  }, {
    name: 'Horse 9'
  }, {
    name: 'Horse 10'
  }, {
    name: 'Horse 11'
  }];

  HorseContext.useHorses.mockReturnValue(horses);

  render(<HorseList />);
  const firstHorseItem = screen.getByText('Horse 1');
  const tenthHorseItem = screen.getByText('Horse 10');
  const eleventhHorseItem = screen.queryByText('Horse 11');

  const listElement = screen.getByTestId('horse-list');

  expect(firstHorseItem).toBeInTheDocument();
  expect(tenthHorseItem).toBeInTheDocument();
  expect(eleventhHorseItem).not.toBeInTheDocument();

  expect(listElement).toBeInTheDocument();
  expect(listElement.children).toHaveLength(10);
});
