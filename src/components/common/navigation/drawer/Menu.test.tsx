import React from 'react';
import Menu from './Menu';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

it('App loads with initial state of 0', () => {
  const container = render(<Menu open={false} toggleDrawer={jest.fn()} />);
  fireEvent.click(container.getByTestId('menu-icon'));
  expect(container.getByTestId('drawer')).toBeDefined();
});
