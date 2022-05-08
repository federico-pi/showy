import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';

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

describe('navigation', () => {
  it('should go back to previous screen', async () => {
    const mockNavigation = {
      goBack: jest.fn(),
    };
    jest.spyOn(mockNavigation, 'goBack');

    const { getByTestId } = render(<Details mockNavigation={mockNavigation} />);

    await act(async () => {
      fireEvent.press(getByTestId('back'));
    });

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
