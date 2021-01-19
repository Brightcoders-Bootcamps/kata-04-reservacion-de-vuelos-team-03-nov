import React from 'react';
import renderer from 'react-test-renderer';
import GoogleButton from '../src/components/GoogleButton';

test('renders correctly', () => {
  const tree = renderer.create(<GoogleButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
