import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import expect from 'expect';

import Button from './button';

describe('List Items', () => {
  const component = ReactTestUtils.renderIntoDocument(
    <Button />,
  );
  it('renders without problems', () => {
    expect(component).toExist();
  });
});
