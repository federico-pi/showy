import React from 'react';

import { create, act } from 'react-test-renderer';

import App from '../src/App';

it('renders correctly with defaults', () => {
  let app;

  act(() => {
    app = create(<App />).toJSON();
  });

  expect(app).toMatchSnapshot();
});
