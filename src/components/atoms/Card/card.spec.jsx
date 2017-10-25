import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Card from './card';

describe('List Items', () => {
  const component = ReactTestUtils.renderIntoDocument(
    <Card />,
  );
  it('renders without problems', () => {
    expect(component).toExist();
  });
});
