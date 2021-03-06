import React from 'react';

import { create, act } from 'react-test-renderer';

import App from '../src/App';

/**
 * Testing that the app renders with defaults
 */
test('renders correctly with defaults', () => {
  let app;

  act(() => {
    app = create(<App />).toJSON();
  });

  expect(app).toMatchSnapshot();
});
