import React from 'react';

import renderer from 'react-test-renderer';

import App from '../src/App';
// import { Details } from '../src/features/details/Details';

it('renders correctly with defaults', () => {
  const button = renderer.create(<App />).toJSON();
  expect(button).toMatchSnapshot();
});
