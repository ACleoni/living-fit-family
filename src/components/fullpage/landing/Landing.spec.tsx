import React from 'react';
import renderer from 'react-test-renderer';
import Landing from './Landing';

it('renders correctly', () => {
    const tree = renderer
        .create(<Landing></Landing>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});