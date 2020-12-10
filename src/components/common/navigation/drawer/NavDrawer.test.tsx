import React from 'react';
import NavDrawer from './NavDrawer';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('App loads with initial state of 0', () => {
  const container = render(<NavDrawer />);
  fireEvent.click(container.getByTestId('menu-icon'));
  expect(container.getByTestId('drawer')).toBeDefined();
});
