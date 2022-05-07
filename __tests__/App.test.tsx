import React from 'react';

import renderer, { create, act } from 'react-test-renderer';

import App from '../src/App';

it('renders correctly with defaults', async () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchSnapshot();
});

it('has 1 child', async () => {
  let tree;
  act(() => {
    tree = create(<App />);
  });

  expect(tree?.toJSON().children.length).toBe(1);
});
