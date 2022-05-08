import React from 'react';

import { create, act } from 'react-test-renderer';

import { Search } from '../Search';

test('snapshot', () => {
  let tree;

  act(() => {
    tree = create(<Search />);
  });

  expect(tree).toMatchSnapshot();
});
