import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { act } from 'react-test-renderer';

import { Search } from '../Search';

describe('form', () => {
  it('should find the button via id', () => {
    const { getByTestId } = render(<Search />);
    const foundButton = getByTestId('searchicon');

    expect(foundButton).toBeTruthy();
  });

  it('should find the text input via id', () => {
    const { getByTestId } = render(<Search />);
    const foundTextInput = getByTestId('search');

    expect(foundTextInput).toBeTruthy();
  });

  it('should change text and press button', async () => {
    const mockOnSubmit = jest.fn();
    const { getByTestId } = render(<Search mockOnSubmit={mockOnSubmit} />);

    await act(async () => {
      fireEvent.changeText(getByTestId('search'), {
        target: { value: 'cats' },
      });
    });

    await act(async () => {
      fireEvent.press(getByTestId('searchicon'));
    });

    expect(mockOnSubmit).toHaveBeenCalled();
  });
});
