import React from 'react';

import { create, act } from 'react-test-renderer';

import { TvMazeMockData } from '~mocks';

import { Details } from '../Details';

const mockedNavigate = jest.fn();

const mockData = {
  show: TvMazeMockData,
};

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      params: {
        item: mockData,
      },
    }),
  };
});

test('snapshot', () => {
  let tree;

  act(() => {
    tree = create(<Details />);
  });

  expect(tree).toMatchSnapshot();
});
