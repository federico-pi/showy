import React from 'react';

import { create, act } from 'react-test-renderer';

import { Details } from '../Details';

import TvMazeMockData from './__mocks__/tvmaze-sample-response.json';

const mockedNavigate = jest.fn();

const mockData = {
  show: TvMazeMockData,
};

/**
 * Mocking useNavigation and useRoute hooks
 */
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useRoute: () => ({
      params: {
        data: mockData.show,
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
