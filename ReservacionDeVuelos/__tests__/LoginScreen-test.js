// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';
import LogInScreen from '../src/screens/LogInScreen';

test('renders correctly', () => {
  const tree = renderer.create(<LogInScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});