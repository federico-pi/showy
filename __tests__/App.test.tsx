import React from 'react';

import renderer from 'react-test-renderer';

import App from '../src/App';

it('renders correctly with defaults', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});
